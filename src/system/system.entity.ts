import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class System {
    @PrimaryGeneratedColumn()
    id: number;
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
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    update_at: Date;
}