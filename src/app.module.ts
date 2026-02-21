import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import {UsersModule} from "./modules/users/users.module";
import { typeormConfig} from "./data-source";
import {TaskTemplateModule} from "./modules/taskTemplates/taskTemplate.module";
import {TaskModule} from "./modules/tasks/tasks.module";
import {TaskCategoryModule} from "./modules/taskCategories/taskCategories.module";
import {SubmissionModule} from "./modules/submissions/submissions.module";
import {StudentGroupModule} from "./modules/students-groups/students-groups.module";
import {LessonModule} from "./modules/lessons/lessons.module";
import {GroupModule} from "./modules/groups/groups.module";
import {FileModule} from "./modules/files/files.module";

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
      UsersModule,
      TaskTemplateModule,
      TaskModule,
      TaskCategoryModule,
      SubmissionModule,
      StudentGroupModule,
      LessonModule,
      GroupModule,
      FileModule,
  ],
})
export class AppModule {}
