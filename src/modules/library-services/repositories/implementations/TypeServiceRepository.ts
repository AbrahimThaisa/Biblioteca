import { TypeService } from "@modules/library-services/entities/TypeService";
import { ICreateTypeServiceDTO, IEditTypeServiceDTO, ITypeServiceRepository } from "../ITypeServiceRepository";
import { Not, Repository, getRepository } from "typeorm";

class TypeServiceRepository implements ITypeServiceRepository {
  private repository: Repository<TypeService>;

  constructor() {
    this.repository = getRepository(TypeService);
  }

  async create({ name }: ICreateTypeServiceDTO): Promise<void> {
    const type_service = this.repository.create({
      name
    });

    await this.repository.save(type_service);
  }

  async list(): Promise<TypeService[]> {
    const type_services = await this.repository.find();

    return type_services;
  }

  async findByName(name: string): Promise<TypeService> {
    const type_service = await this.repository.findOne({ name });

    return type_service;
  }

  async findByNameAndNotEqualsId({ id, name }: IEditTypeServiceDTO): Promise<TypeService> {
    const type_service = await this.repository.findOne({ where: { name, id: Not(id) } });

    return type_service;
  }

  async findById(id: number): Promise<TypeService> {
    const type_service = await this.repository.findOne({ id });

    return type_service;
  }

  async edit({ id, name }: IEditTypeServiceDTO): Promise<void> {
    await this.repository.save({ id, name });
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { TypeServiceRepository }