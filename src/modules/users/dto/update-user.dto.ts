
import {IsDate, IsEnum, IsOptional, IsString, MaxLength} from "class-validator";
import {Roles} from "../../../common/enums/roles.enum";
import {Gender} from "../../../common/enums/gender.enum";
import {ApiProperty} from "@nestjs/swagger";
import {debounceTime} from "rxjs";
import {Type} from "class-transformer";
import {User} from "../entities/user.entity";

export class UserUpdateDto {

    @ApiProperty()
    @IsEnum(Roles)
    @IsOptional()
    role: Roles

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(32)
    login: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    password: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(32)
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(32)
    lastName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(32)
    middleName?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    profileImage?: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    @Type(() => Date)
    birthDate: Date;

    @ApiProperty()
    @IsEnum(Gender)
    @IsOptional()
    gender: Gender;

}
