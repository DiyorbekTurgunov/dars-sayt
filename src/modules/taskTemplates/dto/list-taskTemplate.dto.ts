import {Expose} from "class-transformer";

export class TaskTemplateListDto {

    @Expose()
    id: number;

    @Expose()
    categoryId: number;

    @Expose()
    title: string;

    @Expose()
    description: string;

    @Expose()
    content: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}