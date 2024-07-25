import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Province } from './provinces.model';
import { District } from './districts.model';
import { Ward } from './wards.model';
import { Register } from './user.model';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Province)
    province: Province;

    @ManyToOne(() => District)
    district: District;

    @ManyToOne(() => Ward)
    ward:Ward;   

    @ManyToOne(() => Register, register => register.address)
    register: Register;

    constructor(
        province?: Province,
        district?: District,
        ward?: Ward,
        register?: Register
    ) {
        this.province = province || null;
        this.district = district || null;
        this.ward = ward || null;
        this.register = register || null
    }
} 
 