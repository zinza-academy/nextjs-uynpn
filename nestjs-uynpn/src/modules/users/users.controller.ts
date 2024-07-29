import { ResponseData } from 'src/global/globalClass';
import { UserService } from './users.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { HttpMessage } from 'src/global/globalEnum';
import { HttpStatus } from 'src/global/globalEnum';
import { Register } from 'src/model/user.model';
import { RegisterDTO } from 'src/dto/register.dto';
@Controller('v1/users')
export class UserController {

    constructor(
        private readonly authService: UserService
    ) { }

    @Get()
    async getUser(): Promise<ResponseData<RegisterDTO[]>> {
        try {
            const users = await this.authService.getUser();
            return new ResponseData<RegisterDTO[]>(users, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<RegisterDTO[]>([], HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Post()
    async createUser(@Body(new ValidationPipe) createUserDto: RegisterDTO): Promise<ResponseData<RegisterDTO>> {
        try {
            const createdUser = await this.authService.createOrUpdateUser(createUserDto);
            return new ResponseData<RegisterDTO>(createdUser, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<RegisterDTO>(null, HttpStatus.ERROR, error.message);
        }
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body(new ValidationPipe) updateUserDto: RegisterDTO
    ): Promise<ResponseData<RegisterDTO>> {
        try {
            const userId = parseInt(id, 10);
            const updatedUser = await this.authService.createOrUpdateUser(updateUserDto, userId);
            return new ResponseData<RegisterDTO>(updatedUser, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            if (error instanceof NotFoundException) {
                return new ResponseData<RegisterDTO>(null, HttpStatus.NOT_FOUND, error.message);
            }
            return new ResponseData<RegisterDTO>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<ResponseData<boolean>> {
        try {
            const userId = parseInt(id, 10);
            const deleted = await this.authService.deleteUser(userId);
            return new ResponseData<boolean>(deleted, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            if (error instanceof NotFoundException) {
                return new ResponseData<boolean>(false, HttpStatus.NOT_FOUND, error.message);
            }
            return new ResponseData<boolean>(false, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
