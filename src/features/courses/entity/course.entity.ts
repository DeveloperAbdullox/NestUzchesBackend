import { BaseModel } from "src/core/base-model";
import { Column, Entity } from "typeorm";


@Entity("Course")
export class Course extends BaseModel {
    
    @Column({length: 128})
    title: string

    @Column({length: 128})
    image: string

    @Column({type: "decimal", precision: 12, scale: 2})
    price: string    

    @Column({type: "decimal", precision: 12, scale: 2})
    newPrice: string
}