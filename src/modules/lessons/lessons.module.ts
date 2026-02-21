import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LessonController} from "./lessons.controller";
import {Lesson} from "./entities/lesson.entity";
import {LessonService} from "./lessons.service";

@Module({
    imports: [TypeOrmModule.forFeature([Lesson])],
    controllers: [LessonController],
    providers: [LessonService],
    exports: [LessonService]
})
export class LessonModule {}