import { RegisterDTO } from 'src/dto/register.dto';
import { Register } from 'src/model/user.model';
import { validateAndParseNumber } from 'src/utils/validator';


export class RegisterConverter {
    static toEntity(dto: RegisterDTO): Register {
        const entity = new Register();
        entity.email = dto.email;
        entity.password = dto.password;
        entity.cmnd = dto.cmnd;
        entity.name = dto.name;
        entity.dob = dto.dob;
        entity.gender = dto.gender;
        entity.province = dto.province;
        entity.district = dto.district;
        entity.ward = dto.ward;
        return entity;
    }

    static toDTO(entity: Register): RegisterDTO {
        const dto = new RegisterDTO();
        dto.email = entity.email;
        dto.password = entity.password;
        dto.cmnd = entity.cmnd;
        dto.name = entity.name;
        dto.dob = entity.dob;
        dto.gender = entity.gender;
        dto.province = entity.province;
        dto.district = entity.district;
        dto.ward = entity.ward;
        return dto;
    }
}
