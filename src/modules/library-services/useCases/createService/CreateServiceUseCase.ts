import { AppError } from "@errors/AppError";
import { IServiceRepository } from "@modules/library-services/repositories/IServiceRepository";
import { ITypeServiceRepository } from "@modules/library-services/repositories/ITypeServiceRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id_type_service: number;
  description: string;
  service_date: Date;
}

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository,
    @inject("TypeServiceRepository")
    private typeServiceRepository: ITypeServiceRepository
  ) { }

  async execute({ id_type_service, description, service_date }: IRequest): Promise<void> {
    const type_service = await this.typeServiceRepository.findById(id_type_service);

    if (!type_service) {
      throw new AppError("Type service does not exists!");
    }

    await this.serviceRepository.create({ id_type_service, description, service_date });
  }
}

export { CreateServiceUseCase }