import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskTemplateService} from "./taskTemplate.service";
import {TaskTemplateController} from "./taskTemplate.controller";
import {TaskTemplate} from "./entities/task-template.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TaskTemplate])],
    controllers: [TaskTemplateController],
    providers: [TaskTemplateService],
    exports: [TaskTemplateService],
})
export class TaskTemplateModule {
}