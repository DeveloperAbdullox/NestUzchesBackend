import { BaseModel } from "src/core/base-model";
import { User } from "src/features/authentication/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { Course } from "./course.entity";

@Entity("CourseLikes")
export class CourseLikes extends BaseModel {

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.courseLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User>

    @Column()
    courseId: number

    @ManyToOne(() => Course, (course) => course.courseLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    course: Relation<Course>

    @Column({type: "timestamp"})
    date: Date
}