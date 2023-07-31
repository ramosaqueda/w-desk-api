import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../config/base.entity";
@Entity()
export class System extends BaseEntity {
     
    @Column()
    name: string;
    @Column({nullable: true})
    description: string;
    @Column({unique: true})
    url: string;
    @Column({nullable: true})
    cssclass: string;
    @Column({nullable: true})
    icon: string;
    @Column()
    version: string;
   
}