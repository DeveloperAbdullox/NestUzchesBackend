import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany, Relation } from "typeorm";
import { Course } from "./course.entity";


@Entity("CourseCategory")
export class CourseCategory extends BaseModel {
    @Column({length: 64, unique: true})
    title: string

    @OneToMany(() => Course, (course) => course.category)
    courses: Relation<Course[]>
}