import {
  IsString,
  IsOptional,
  IsEmail,
  IsNumber,
  IsDateString,
  IsNotEmpty,
  Matches,
} from "class-validator";
import { Transform } from 'class-transformer';
import { validateAndParseNumber } from "src/utils/validator";

export class RegisterDTO {

  id: number;

  @IsEmail({}, { message: "Invalid email format." })
  @IsNotEmpty({ message: "Email is required." })
  email: string;

  @IsString({ message: "Password must be a string." })
  @IsNotEmpty({ message: "Password is required." })
  password: string;

  @IsString({ message: "CMND must be a string." })
  @IsNotEmpty({ message: "CMND is required." })
  @Matches(/^\d{9}$|^\d{12}$/, { message: "CMND must be 9 or 12 digits long." })
  cmnd: string;

  @IsString({ message: "Name must be a string." })
  @IsNotEmpty({ message: "Name is required." })
  name: string;

  @IsString({ message: "Invalid date format for Date of Birth." })
  @IsNotEmpty({ message: "Date of Birth is required." })
  dob: string;

  @IsString({ message: "Gender must be a string." })
  @IsNotEmpty({ message: "Gender is required." })
  gender: string;

  @IsNotEmpty()
  @IsNumber({}, { message: "Province must be a number." })
  province: number;

  @IsNotEmpty()
  @IsNumber({}, { message: "District must be a number." })
  district: number;

  @IsNotEmpty()
  @IsNumber({}, { message: "Ward must be a number." })
  ward: number;
}
