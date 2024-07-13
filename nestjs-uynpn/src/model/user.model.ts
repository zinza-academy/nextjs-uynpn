import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    cmnd: string;

    @Column()
    name: string;

    @Column()
    dob: string;

    @Column()
    gender: string;

    @Column()
    province: number;

    @Column()
    district: number;

    @Column()
    ward: number;

    constructor(email?: string, password?: string, cmnd?: string, name?: string, dob?: string, gender?: string, province?: number, district?: number, ward?: number) {
        this.email = email || '';
        this.password = password || '';
        this.cmnd = cmnd || '';
        this.name = name || '';
        this.dob = dob || '';
        this.gender = gender || '';
        this.province = province; 
        this.district = district; 
        this.ward = ward; 
    }
}
