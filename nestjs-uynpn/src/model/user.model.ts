import { Gender } from 'src/enums/gender.enum';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Address } from './address.model';
import { Role } from 'src/enums/role.enum';
@Entity()
export class Register {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'enum', enum: Role})
    role: Role;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 255 })
    cmnd: string;
 
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'date' })
    dob: Date;

    @Column({ type: 'enum', enum: Gender, default: Gender.Male })
    gender: Gender;

    @OneToMany(() => Address, address => address.register)
    address: Address[];

    constructor(
        email?: string,
        password?: string,
        role?: Role,
        cmnd?: string,
        name?: string,
        dob?: Date, 
        gender?: Gender
    ) {
        this.email = email || '';
        this.password = password || '';
        this.cmnd = cmnd || '';
        this.name = name || '';
        this.dob = dob;
        this.role = role;
        this.gender = gender || Gender.Male;
    
    }
}
