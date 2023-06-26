import { AppError } from "@errors/AppError";
import { ITypeServiceRepository } from "@modules/library-services/repositories/ITypeServiceRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: number;
  name: string;
}

@injectable()
class EditTypeServiceUseCase {
  constructor(
    @inject("TypeServiceRepository")
    private typeServiceRepository: ITypeServiceRepository
  ) { }

  async execute({ id, name }: IRequest): Promise<void> {
    const type_service = await this.typeServiceRepository.findById(id);

    if (!type_service) {
      throw new AppError("Type service does not exists!");
    }

    const typeServiceNameAlreadyInUse = await this.typeServiceRepository.findByNameAndNotEqualsId({ id, name });

    if (typeServiceNameAlreadyInUse) {
      throw new AppError("Type service name already in use!");
    }

    await this.typeServiceRepository.edit({ id, name });
  }

}

export { EditTypeServiceUseCase };