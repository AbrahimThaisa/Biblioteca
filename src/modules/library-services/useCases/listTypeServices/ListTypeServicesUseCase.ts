import { inject, injectable } from "tsyringe";

import { TypeService } from "@modules/library-services/entities/TypeService";
import { ITypeServiceRepository } from "@modules/library-services/repositories/ITypeServiceRepository";


@injectable()
class ListTypeServicesUseCase {
  constructor(
    @inject("TypeServiceRepository")
    private typeSetviceRepository: ITypeServiceRepository
  ) { }

  async execute(): Promise<TypeService[]> {
    const type_services = await this.typeSetviceRepository.list();

    return type_services;
  }
}

export { ListTypeServicesUseCase }