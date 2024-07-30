import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../users/users.module';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,  // Đọc secret từ biến môi trường
      signOptions: { expiresIn: '60m' },  // Thời gian hết hạn của JWT
    }),
    UserModule,  // Import module người dùng để có thể sử dụng dịch vụ người dùng
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy, JwtAuthGuard, LocalAuthGuard],
  exports: [AuthService, JwtAuthGuard, LocalAuthGuard],  // Export các dịch vụ và guards để sử dụng ở các module khác
})
export class AuthModule {}
