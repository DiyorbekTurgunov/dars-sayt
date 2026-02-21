import {IsEnum, IsNotEmpty, IsOptional, IsString, IsDateString, maxLength, MaxLength, IsDate} from 'class-validator';
import { Gender } from '../../../common/enums/gender.enum';
import { Roles } from '../../../common/enums/roles.enum';
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";

export class CreateUserDto {

    @ApiProperty()
    @IsEnum(Roles)
    role: Roles;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    login: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    lastName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    middleName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    profileImage?: string;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    birthDate: Date;

    @ApiProperty()
    @IsEnum(Gender)
    gender: Gender;
}
