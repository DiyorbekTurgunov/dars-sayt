import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskCategoryController} from "./taskCategories.controller";
import {TaskCategory} from "./entities/task-category.entity";
import {Module} from "@nestjs/common";
import {TaskCategoryService} from "./taskCategories.service";

@Module({
    imports: [TypeOrmModule.forFeature([TaskCategory])],
    controllers: [TaskCategoryController],
    providers: [TaskCategoryService],
    exports: [TaskCategoryService]
})
export class TaskCategoryModule {}