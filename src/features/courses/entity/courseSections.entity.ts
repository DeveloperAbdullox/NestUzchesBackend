import { BaseModel } from "src/core/base-model";
import { Column, JoinColumn, ManyToOne, Relation } from "typeorm";
import { Course } from "./course.entity";

export class CourseSection extends BaseModel {

    @ManyToOne(() => Course, (course) => course.sections)
    @JoinColumn({name: "courseId"})
    course: Relation<Course>

    @Column({length: 256})
    title: string

    @Column({nullable: true})
    order: number

    @Column({type: "timestamp"})
    date: Date
}