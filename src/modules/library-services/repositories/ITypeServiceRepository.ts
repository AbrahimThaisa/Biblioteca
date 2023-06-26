import { TypeService } from "../entities/TypeService";


interface ICreateTypeServiceDTO {
  name: string;
}

interface IEditTypeServiceDTO {
  id: number;
  name: string;
}

interface ITypeServiceRepository {
  create({ name }: ICreateTypeServiceDTO): Promise<void>;
  list(): Promise<TypeService[]>;
  findByName(name: string): Promise<TypeService>;
  findByNameAndNotEqualsId({ id, name }: IEditTypeServiceDTO): Promise<TypeService>;
  findById(id: number): Promise<TypeService>;
  edit({ id, name }: IEditTypeServiceDTO): Promise<void>;
  delete(id: number): Promise<void>;
}

export { ITypeServiceRepository, ICreateTypeServiceDTO, IEditTypeServiceDTO }