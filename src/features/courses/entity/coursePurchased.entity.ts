import { BaseModel } from "src/core/base-model";
import { User } from "src/features/authentication/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { Course } from "./course.entity";


@Entity("CoursePurchased")
export class CoursePurchased extends BaseModel {

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.coursePurchased, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User>

    @Column()
    courseId: number

    @ManyToOne(() => Course, (course) => course.coursePurchased, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    course: Relation<Course>

    @Column({type: "boolean", default: false})
    isCompleted: boolean

    @Column({type: "timestamp"})
    date: Date
}