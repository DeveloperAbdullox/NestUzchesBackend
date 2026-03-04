import { BaseModel } from "src/core/base-model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Relation } from "typeorm";
import { CourseSection } from "./courseSections.entity";
import { CourseCategory } from "./courseCategory.entity";
import { CourseLessons } from "./courseLessons.entity";
import { CoursePurchased } from "./coursePurchased.entity";
import { CourseLikes } from "./courseLikes.entity";


@Entity("Course")
export class Course extends BaseModel {

    @OneToMany(() => CourseLikes, (likes) => likes.course)
    courseLikes: Relation<CourseLikes[]>

    @OneToMany(() => CoursePurchased, (purchased) => purchased.course)
    coursePurchased: Relation<CoursePurchased[]>

    @OneToMany(() => CourseLessons, (lesson) => lesson.course)
    lessons: Relation<CourseLessons[]>

    @Column()
    categoryId: number

    @ManyToOne(() => CourseCategory, (category) => category.courses, {onDelete: "RESTRICT"})
    @JoinColumn({name: "categoryId"})
    category: Relation<CourseCategory>

    @OneToMany(() => CourseSection, (section) => section.course)
    sections: Relation<CourseSection[]>
    
    @Column({length: 128})
    title: string

    @Column({length: 128})
    image: string

    @Column({type: "decimal", precision: 12, scale: 2})
    price: string    

    @Column({type: "decimal", precision: 12, scale: 2})
    newPrice: string
}