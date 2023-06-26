import { AppError } from "@errors/AppError";
import { IServiceRepository } from "@modules/library-services/repositories/IServiceRepository";
import { inject, injectable } from "tsyringe";



@injectable()
class DeleteServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) { }

  async execute(id: number): Promise<void> {
    const serviceExists = await this.serviceRepository.findById(id);

    if (!serviceExists) {
      throw new AppError("Service does not exists!");
    }

    await this.serviceRepository.delete(id);
  }
}

export { DeleteServiceUseCase };