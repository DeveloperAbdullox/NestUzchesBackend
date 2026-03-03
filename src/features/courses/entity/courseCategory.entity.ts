import { BaseModel } from "src/core/base-model";
import { Column } from "typeorm";

export class CourseCategory extends BaseModel {
    @Column({length: 64, unique: true})
    title: string
}