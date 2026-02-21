import {Expose} from "class-transformer";

export class TaskListDto {

    @Expose()
    id: number;

    @Expose()
    lessonId: number;

    @Expose()
    templateId: number;

    @Expose()
    order: number;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

}