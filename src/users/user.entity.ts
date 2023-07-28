import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn} from 'typeorm';
import { Profile } from '../profile/profile.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true})
    email: string;

    @Column()
    password: string;
 
    @Column({default: true})
    active: boolean;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}