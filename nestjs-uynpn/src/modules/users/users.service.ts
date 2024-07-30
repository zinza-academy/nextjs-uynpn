import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Register } from "src/model/user.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegisterDTO } from "src/dto/register.dto";
import { RegisterConverter } from "src/converters/RegisterConverter";

@Injectable()

export class UserService {

    constructor(
        @InjectRepository(Register)
        private readonly userRepository: Repository<Register>,
    ) {

    }

    async getUser(): Promise<RegisterDTO[]> {
        const users = await this.userRepository.find({
            relations: ['address', 'address.province', 'address.district', 'address.ward']
        });

        return users.map(user => RegisterConverter.toDTO(user));
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
            const emailExists = await this.userRepository.findOneBy({ email: createUserDto.email });
            if (emailExists) {
                throw new ConflictException(`Email ${createUserDto.email} is already in use.`);
            }
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

  async findByUsername(name: string): Promise<Register> {
    const user = await this.userRepository.findOne({
        where: { name },
    });
    if (!user) {
        throw new NotFoundException(`Can't find user with username ${name}`);
    }
    return user;
  }

  async findById(id: number): Promise<Register> {
    const user = await this.userRepository.findOne({
        where: { id },
    });
    if (!user) {
        throw new NotFoundException(`Can't find user with ID ${id}`);
    }
    return user;
  }

}
