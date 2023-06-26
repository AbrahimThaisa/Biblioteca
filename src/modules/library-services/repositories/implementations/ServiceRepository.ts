import { Service } from "@modules/library-services/entities/Service";
import { ICreateServiceDTO, IEditServiceDTO, IListServiceDTO, IServiceRepository } from "../IServiceRepository";
import { Repository, getRepository } from "typeorm";


class ServiceRepository implements IServiceRepository {
  private repository: Repository<Service>;

  constructor() {
    this.repository = getRepository(Service);
  }

  async create({ id_type_service, description, service_date }: ICreateServiceDTO): Promise<void> {
    const service = this.repository.create({
      id_type_service, description, service_date
    });

    await this.repository.save(service);
  }

  async list({ type_services, date_start, date_end }: IListServiceDTO): Promise<Service[]> {
    let query = this.repository.createQueryBuilder("services").innerJoinAndSelect("services.type_service", "type_service");

    if (type_services && type_services.length > 0) {
      query = query.where("services.id_type_service IN (:...typeServices)", { typeServices: type_services });
    }

    if (date_start) {
      query = query.andWhere("services.service_date >= :dateStart", { dateStart: date_start });
    }

    if (date_end) {
      query = query.andWhere("services.service_date <= :dateEnd", { dateEnd: date_end });
    }

    const services = await query.getMany();

    return services;
  }

  async findByTypeServiceId(id_type_service: number): Promise<Service> {
    const services = await this.repository.findOne({ where: { id_type_service } });

    return services;
  }

  async findById(id: number): Promise<Service> {
    const services = await this.repository.findOne(id, { relations: ["type_service"] });

    return services;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async edit({ id, id_type_service, description, service_date }: IEditServiceDTO): Promise<void> {
    await this.repository.save({ id, id_type_service, description, service_date });
  }
}

export { ServiceRepository };