import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Relation } from "typeorm";
import { Course } from "./course.entity";
import { CourseLessons } from "./courseLessons.entity";


@Entity("CourseSection")
export class CourseSection extends BaseModel {

    @OneToMany(() => CourseLessons, (lesson) => lesson.courseSections)
    courseLessons: Relation<CourseLessons[]>

    @Column()
    courseId: number

    @ManyToOne(() => Course, (course) => course.sections, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    course: Relation<Course>

    @Column({length: 256})
    title: string

    @Column({nullable: true})
    order: number

    @Column({type: "timestamp"})
    date: Date
}