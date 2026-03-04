import { BaseModel } from "src/core/base-model";
import { User } from "src/features/authentication/entity/user.entity";
import { CourseLessons } from "src/features/courses/entity/courseLessons.entity";
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";


@Entity("UserLessons")
export class UserLessons extends BaseModel {

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.lessons, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User>

    @Column()
    courseLessonId: number

    @ManyToOne(() => CourseLessons, (lesson) => lesson.userLesson, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseLessonId"})
    courseLesson: Relation<CourseLessons>

    @Column({nullable: true})
    stoppedAt: number

    @Column({type: "boolean", default: false})
    isCompleted: boolean
}