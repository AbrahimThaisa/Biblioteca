import { AppError } from "@errors/AppError";
import { IServiceRepository } from "@modules/library-services/repositories/IServiceRepository";
import { ITypeServiceRepository } from "@modules/library-services/repositories/ITypeServiceRepository";
import { inject, injectable } from "tsyringe";



@injectable()
class DeleteTypeServiceUseCase {
  constructor(
    @inject("TypeServiceRepository")
    private typeServiceRepository: ITypeServiceRepository,
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) { }

  async execute(id: number): Promise<void> {
    const typeServiceExists = await this.typeServiceRepository.findById(id);

    if (!typeServiceExists) {
      throw new AppError("Type service does not exists!");
    }

    const serviceWithThisTypeServiceExists = await this.serviceRepository.findByTypeServiceId(id);

    if (serviceWithThisTypeServiceExists) {
      throw new AppError("There are services associated with this type of service");
    }

    await this.typeServiceRepository.delete(id);
  }
}

export { DeleteTypeServiceUseCase };