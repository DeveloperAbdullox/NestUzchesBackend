import { BaseModel } from "src/core/base-model";
import { User } from "src/features/authentication/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { Course } from "./course.entity";

@Entity("CourseRewiew")
export class CourseRewiew extends BaseModel {

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.courseRewiew, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User>

    @Column()
    courseId: number

    @ManyToOne(() => Course, (course) => course.courseRewiew, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    course: Relation<Course>

    @Column()
    rating: number

    @Column({length: 512, nullable: true})
    comment: string

    @Column({type: "timestamp"})
    date: Date
}