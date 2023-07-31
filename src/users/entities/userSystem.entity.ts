import { Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from '../../config/base.entity'
import { User } from './user.entity';
import { System } from '../../system/system.entity';

@Entity()
export class UserSystem extends BaseEntity {
    @Column()
    id_user: number;
    @Column()
    id_system: number;
    
    @ManyToOne(()=>User, (user: User) => user.system.id))
    user: User;

    @ManyToOne()
    system: System;
}