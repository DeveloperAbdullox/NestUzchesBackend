import { BaseModel } from "src/core/base-model";
import { Column, Entity } from "typeorm";

@Entity("News")
export class News extends BaseModel {

    @Column({length: 256})
    title: string

    @Column({length: 256})
    image: string
    
    @Column({type: "text"})
    content: string
}