import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { District } from './districts.model';
import { Address } from './address.model';


@Entity('provinces')
export class Province {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @OneToMany(() => District, district => district.province)
    districts: District[];

    @OneToMany(() => Address, address => address.province)
    addresses: Address[]; 

    constructor(
        name?: string,
        code?: string,
        districts?: District[],
        addresses?: Address[]
    ) {
        this.name = name || '';
        this.code = code || '';
    }
}
