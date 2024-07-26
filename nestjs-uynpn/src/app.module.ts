import { Ward } from 'src/model/wards.model';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';
import { APP_FILTER } from '@nestjs/core'
import { ImportLocationDataCommand } from './config/commands/import-location-data';
import { ConsoleModule } from 'nestjs-console';
import { AuthModule } from './modules/auth/auth.module';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { District } from './model/districts.model';
import { Province } from './model/provinces.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [DatabaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Province, District, Ward]),
    ConsoleModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    ImportLocationDataCommand,
  ],
})
export class AppModule {}
