import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany, Relation } from "typeorm";
import { CourseSection } from "./courseSections.entity";


@Entity("Course")
export class Course extends BaseModel {

    @OneToMany(() => CourseSection, (section) => section, {onDelete: "CASCADE"})
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