import { inject, injectable } from "tsyringe";

import { ITypeServiceRepository } from "@modules/library-services/repositories/ITypeServiceRepository";
import { AppError } from "@errors/AppError";

interface IRequest {
  name: string;
}

@injectable()
class CreateTypeServiceUseCase {
  constructor(
    @inject("TypeServiceRepository")
    private typeServiceRepository: ITypeServiceRepository
  ) { }

  async execute({ name }: IRequest): Promise<void> {
    const typeServiceAlreadyExists = await this.typeServiceRepository.findByName(name);

    if (typeServiceAlreadyExists) {
      throw new AppError("Type service already exists!");
    }

    this.typeServiceRepository.create({ name });
  }
}

export { CreateTypeServiceUseCase }