import { Service } from "@modules/library-services/entities/Service";
import { IServiceRepository } from "@modules/library-services/repositories/IServiceRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) { }

  async execute({ type_services, date_start, date_end }): Promise<Service[]> {
    const services = await this.serviceRepository.list({ type_services, date_start, date_end });

    return services;
  }
}

export { ListServiceUseCase };