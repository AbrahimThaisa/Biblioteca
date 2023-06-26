import { Service } from "../entities/Service";

interface ICreateServiceDTO {
  id_type_service: number;
  description?: string;
  service_date: Date;
}

interface IListServiceDTO {
  type_services?: number[];
  date_start?: Date;
  date_end?: Date;
}

interface IEditServiceDTO {
  id: number;
  id_type_service: number;
  description?: string;
  service_date: Date;
}

interface IServiceRepository {
  create({ id_type_service, description, service_date }: ICreateServiceDTO): Promise<void>;
  list({ type_services, date_start, date_end }: IListServiceDTO): Promise<Service[]>;
  findByTypeServiceId(id_type_service: number): Promise<Service>;
  findById(id: number): Promise<Service>;
  delete(id: number): Promise<void>;
  edit({ id, id_type_service, description, service_date }: IEditServiceDTO): Promise<void>;
}

export { ICreateServiceDTO, IListServiceDTO, IEditServiceDTO, IServiceRepository };