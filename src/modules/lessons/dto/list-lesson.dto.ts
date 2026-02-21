import {Expose} from "class-transformer";

export class LessonListDto {

    @Expose()
    id: number;

    @Expose()
    groupId: number;

    @Expose()
    title: string;

    @Expose()
    startDate: Date;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}