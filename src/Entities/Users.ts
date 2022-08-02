import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  first_name: string;

  @Column({nullable:true})
  last_name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column({ type: 'boolean', width: 1, default : false})
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
