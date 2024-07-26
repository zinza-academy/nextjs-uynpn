import { Controller, Post, Body, Req, UseGuards, Get, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage } from 'src/global/globalEnum';
import { HttpStatus } from 'src/global/globalEnum';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }): Promise<ResponseData<any>> {
    try {
      const user = await this.authService.validateUser(body.email, body.password);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const { access_token } = await this.authService.login(user);
      return new ResponseData<any>(
        { access_token },
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS
      );
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      } else {
        throw new InternalServerErrorException(HttpMessage.ERROR);
      }
    }
  }

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req): ResponseData<null> {
    try {
      return new ResponseData<null>(
        null,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS
      );
    } catch (error) {
      throw new InternalServerErrorException(HttpMessage.ERROR);
    }
  }
}
