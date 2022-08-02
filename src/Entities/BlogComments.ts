import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('blog_comments')
export class BlogComments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column()
  blog_id: number;

  @Column({default:0})
  user_id: number;

  @Column({nullable:true})
  email: string;

  @Column({nullable:true})
  name: string;

  @Column({nullable:true})
  phone: string;

  @Column({ type: 'boolean', width: 1, default : false})
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
