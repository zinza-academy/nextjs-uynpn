import { Module, ValidationPipe } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { Register } from "src/model/user.model";
import { APP_PIPE } from '@nestjs/core';
@Module({
    imports: [ 
        TypeOrmModule.forFeature([Register]),
    ],
    controllers: [UserController],
    providers: [
        UserService,
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
            useValue: {
                transform: true,
                transformOptions: {
                    enableImplicitConversion: true,
                },
                exceptionFactory: errors => {
                    return new Error(`Validation failed: ${JSON.stringify(errors)}`);
                },
            },
        },
    ],
})
export class UserModule {}
