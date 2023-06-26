import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypeService } from "./TypeService";

@Entity("services")
class Service {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => TypeService)
  @JoinColumn({ name: "id_type_service" })
  type_service: TypeService;

  @Column()
  id_type_service: number;

  @Column()
  description: string;

  @Column()
  service_date: Date;

  @CreateDateColumn()
  created_at: Date;
}

export { Service }