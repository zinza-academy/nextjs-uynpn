import { Injectable, NotFoundException } from "@nestjs/common";
import { Register } from "src/model/user.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegisterDTO } from "src/dto/register.dto";
import { RegisterConverter } from "src/converters/RegisterConverter";

@Injectable()

export class AuthService {

    constructor(
        @InjectRepository(Register)
        private readonly userRepository: Repository<Register>,
    ) {

    }

    async getUser(): Promise<Register[]> {
        return await this.userRepository.find()
    }

    async createOrUpdateUser(createUserDto: RegisterDTO, id?: number): Promise<RegisterDTO> {
        let user;
        if (id) {
            user = await this.userRepository.findOneBy({ id });
            if (user) {
                await this.userRepository.update(id, RegisterConverter.toEntity(createUserDto));
                user = await this.userRepository.findOneBy({ id });
            } else {
                throw new NotFoundException(`Can't find user with ID ${id}`);
            }
        } else {//thêm check email trùng 
            user = this.userRepository.create(RegisterConverter.toEntity(createUserDto));
            user = await this.userRepository.save(user);
        }
        return RegisterConverter.toDTO(user);
    } 

    async deleteUser(id: number): Promise<boolean> {
        const user = await this.userRepository.findOneBy({id})
        if(!user) {
            throw new NotFoundException(`Can't find users with ID ${id}`);
        }
        await this.userRepository.delete(id);
        return true;
    }

}