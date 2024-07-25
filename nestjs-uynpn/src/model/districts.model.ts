import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Province } from './provinces.model';
import { Ward } from './wards.model';
import { Address } from './address.model';


@Entity('districts') // Match the table name in your database
export class District {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @ManyToOne(() => Province, province => province.districts)
    @JoinColumn({ name: 'province_id' }) 
    province: Province;

    @OneToMany(() => Ward, ward => ward.district)
    wards: Ward[];

    @OneToMany(() => Address, address => address.district)
    addresses: Address[]; 

    constructor(
        name?: string,
        code?: string,
        province?: Province,
        wards?: Ward[],
        addresses?: Address[]
    ) {
        this.name = name || '';
        this.code = code || '';
        this.province = province || null;
    }
}

