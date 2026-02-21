import {ApiProperty} from "@nestjs/swagger";
import {ManyToOne} from "typeorm";
import {User} from "../../users/entities/user.entity";
import {Lesson} from "../../lessons/entities/lesson.entity";
import {Submission} from "../../submissions/entities/submission.entity";
import {IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";

export class FileUpdateDto {

    @ApiProperty()
    @IsOptional()
    studentId: number;

    @ApiProperty()
    @IsOptional()
    lessonId: number;

    @ApiProperty()
    @IsOptional()
    submissionId: number;

    @ApiProperty()
    @IsString()
    @MaxLength(32)
    @IsOptional()
    path: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    size: number;
}