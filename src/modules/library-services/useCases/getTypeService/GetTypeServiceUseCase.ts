import { TypeService } from "@modules/library-services/entities/TypeService";
import { ITypeServiceRepository } from "@modules/library-services/repositories/ITypeServiceRepository";
import { inject, injectable } from "tsyringe";



@injectable()
class GetTypeServiceUseCase {
  constructor(
    @inject("TypeServiceRepository")
    private typeServiceRepository: ITypeServiceRepository
  ) { }

  async execute(id: number): Promise<TypeService> {
    const type_service = await this.typeServiceRepository.findById(id);

    return type_service;
  }
}

export { GetTypeServiceUseCase };