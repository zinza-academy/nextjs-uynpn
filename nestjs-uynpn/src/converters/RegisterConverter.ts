import { RegisterDTO } from 'src/dto/register.dto';
import { Address } from 'src/model/address.model';
import { District } from 'src/model/districts.model';
import { Province } from 'src/model/provinces.model';
import { Register } from 'src/model/user.model';
import { Ward } from 'src/model/wards.model';
import { validateAndParseNumber } from 'src/utils/validator';


export class RegisterConverter {
    static toEntity(dto: RegisterDTO): Register {
        const entity = new Register();
        entity.email = dto.email; 
        entity.password = dto.password;
        entity.cmnd = dto.cmnd;
        entity.name = dto.name;
        entity.dob = dto.dob;   
        entity.role = dto.role;
        entity.gender = dto.gender;
        
        const address = new Address();
        address.province = { id: dto.province_id } as Province;
        address.district = { id: dto.district_id } as District;
        address.ward = { id: dto.ward_id } as Ward;

        entity.address = [address];

        return entity;
    }

    static toDTO(entity: Register): RegisterDTO {
        const dto = new RegisterDTO();
        dto.email = entity.email;
        dto.password = entity.password;
        dto.cmnd = entity.cmnd;
        dto.name = entity.name;
        dto.dob = entity.dob;
        dto.role = entity.role; 
        dto.gender = entity.gender;
 
        if (entity.address && entity.address.length > 0) {
            const address = entity.address[0]; 

            dto.province_id = address.province ? address.province.id : null;
            dto.district_id = address.district ? address.district.id : null;
            dto.ward_id = address.ward ? address.ward.id : null;
        } else {
            dto.province_id = null;
            dto.district_id = null;
            dto.ward_id = null;

        }
        
        return dto;
    }
}
