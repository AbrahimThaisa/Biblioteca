import { inject, injectable } from "tsyringe";

import { Service } from "@modules/library-services/entities/Service";
import { IServiceRepository } from "@modules/library-services/repositories/IServiceRepository";


@injectable()
class GetServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) { }

  async execute(id: number): Promise<Service> {
    const service = await this.serviceRepository.findById(id);

    return service;
  }
}

export { GetServiceUseCase };