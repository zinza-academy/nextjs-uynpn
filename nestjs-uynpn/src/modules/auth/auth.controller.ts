import { ResponseData } from 'src/global/globalClass';
import { AuthService } from './auth.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { HttpMessage } from 'src/global/globalEnum';
import { HttpStatus } from 'src/global/globalEnum';
import { Register } from 'src/model/user.model';
import { RegisterDTO } from 'src/dto/register.dto';



@Controller('v1/auth')

export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {

    }

    @Get('users')
    async getUser(): Promise<ResponseData<Register[]>> {
        try {
            const users = await this.authService.getUser();
            return new ResponseData<Register[]>(users, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Register[]>([], HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Post('user')
    async createUser(@Body(new ValidationPipe) createUserDto: RegisterDTO): Promise<ResponseData<RegisterDTO>> {
        try {
            const createdUser = await this.authService.createOrUpdateUser(createUserDto);
            return new ResponseData<RegisterDTO>(createdUser, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<RegisterDTO>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('user/:id')
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

    @Delete('delete/:id')
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