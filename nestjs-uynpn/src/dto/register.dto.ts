import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Matches,
  MinLength,
  MaxLength,
  IsDate,
  IsEnum,
  IsInt,
  IsPositive,
} from "class-validator";
import { Transform, Type } from 'class-transformer';
import { Gender } from "src/enums/gender.enum";
export class RegisterDTO {

  @IsEmail({}, { message: "Invalid email format." })
  @IsNotEmpty({ message: "Email is required." })
  email: string;

  @IsString({ message: "Password must be a string." })
  @IsNotEmpty({ message: "Password is required." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  @MaxLength(20, { message: "Password cannot be longer than 20 characters." })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, { message: "Password must contain both letters and numbers." })
  password: string;

  @IsString({ message: "CMND must be a string." })
  @IsNotEmpty({ message: "CMND is required." })
  @Matches(/^\d{9}$|^\d{12}$/, { message: "CMND must be 9 or 12 digits long." })
  cmnd: string;

  @IsString({ message: "Name must be a string." })
  @IsNotEmpty({ message: "Name is required." })
  @MinLength(8, { message: "Name must be at least 8 characters long." })
  @MaxLength(30, { message: "Name cannot be longer than 20 characters." })
  name: string;

  @IsNotEmpty({ message: "Date of Birth is required." })
  @Type(() => Date)
  @IsDate({ message: "Invalid date format for Date of Birth." })
  dob: Date;

  @IsString({ message: "Gender must be a string." })
  @IsEnum(Gender, { message: "Gender must be either 'male' or 'female'." })
  gender: Gender;

  @IsNotEmpty({ message: "Province ID is required." })
  @IsInt({ message: "Province ID must be an integer." })
  @IsPositive({ message: "Province ID must be a positive integer." })
  province_id: number;

  @IsNotEmpty({ message: "District ID is required." })
  @IsInt({ message: "District ID must be an integer." })
  @IsPositive({ message: "District ID must be a positive integer." })
  district_id: number;

  @IsNotEmpty({ message: "Ward ID is required." })
  @IsInt({ message: "Ward ID must be an integer." })
  @IsPositive({ message: "Ward ID must be a positive integer." })
  ward_id: number;
}
