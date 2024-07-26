import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { District } from './districts.model';
import { Address } from './address.model';


@Entity('wards')
export class Ward {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @ManyToOne(() => District, district => district.wards)
    @JoinColumn({ name: 'district_id' })
    district: District;

    @OneToMany(() => Address, address => address.ward)
    addresses: Address[]; 

    constructor(
        name?: string,
        code?: string,
        district?: District,
        addresses?: Address[]
    ) {
        this.name = name || '';
        this.code = code || '';
        this.district = district || null;
    }
}
