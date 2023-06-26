import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("type_services")
class TypeService {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}

export { TypeService }