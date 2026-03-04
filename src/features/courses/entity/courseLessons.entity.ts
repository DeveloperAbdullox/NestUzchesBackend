import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Relation } from "typeorm";
import { Course } from "./course.entity";
import { CourseSection } from "./courseSections.entity";
import { UserLessons } from "src/features/common/entity/userLessons.entity";

@Entity("CourseLessons")
export class CourseLessons extends BaseModel {

    @Column()
    courseId: number

    @ManyToOne(() => Course, (course) => course.lessons, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseId"})
    course: Relation<Course>

    @Column()
    courseSectionid: number

    @ManyToOne(() => CourseSection, (section) => section.courseLessons, {onDelete: "CASCADE"})
    @JoinColumn({name: "courseSectionId"})
    courseSections: Relation<CourseSection>

    @OneToMany(() => UserLessons, (user) => user.courseLesson)
    userLesson: Relation<UserLessons[]>

    @Column({length: 128})
    title: string

    @Column({type: "text", nullable: true})
    content: string

    @Column({length: 128, nullable: true})
    thumbnail: string

    @Column({length: 256})
    video: string

    @Column({nullable: true})
    order: number

    @Column({type: "timestamp"})
    date: Date

    @Column({type: "boolean", default: false})
    isFree: boolean
}