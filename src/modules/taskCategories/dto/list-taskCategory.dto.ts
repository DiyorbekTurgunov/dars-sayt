import {Expose} from "class-transformer";

export class TaskCategoryListDto {

    @Expose()
    id: number;

    @Expose()
    title: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}