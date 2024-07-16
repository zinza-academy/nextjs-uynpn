import { Gender } from 'src/enums/gender.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Register {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 255 })
    cmnd: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'date' })
    dob: string;

    @Column({ type: 'enum', enum: Gender, default: Gender.Male })
    gender: Gender;

    @Column({ type: 'int' })
    province: number;

    @Column({ type: 'int' })
    district: number;

    @Column({ type: 'int' })
    ward: number;

    constructor(
        email?: string,
        password?: string,
        cmnd?: string,
        name?: string,
        dob?: string,
        gender?: Gender,
        province?: number,
        district?: number,
        ward?: number,
    ) {
        this.email = email || '';
        this.password = password || '';
        this.cmnd = cmnd || '';
        this.name = name || '';
        this.dob = dob || '';
        this.gender = gender || Gender.Male;
        this.province = province;
        this.district = district;
        this.ward = ward;
    }
}
