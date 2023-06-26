import { AppError } from "@errors/AppError";
import { IServiceRepository } from "@modules/library-services/repositories/IServiceRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: number;
  id_type_service: number;
  description: string;
  service_date: Date;
}

@injectable()
class EditServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) { }

  async execute({ id, id_type_service, description, service_date }: IRequest): Promise<void> {
    const service = await this.serviceRepository.findById(id);

    if (!service) {
      throw new AppError("Service does not exists!");
    }

    await this.serviceRepository.edit({ id, id_type_service, description, service_date });
  }
}

export { EditServiceUseCase };