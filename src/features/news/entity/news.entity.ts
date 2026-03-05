import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany, Relation } from "typeorm";
import { NewsViews } from "./newsViews.entity";

@Entity("News")
export class News extends BaseModel {

    @Column({length: 256})
    title: string

    @Column({length: 256})
    image: string
    
    @Column({type: "text"})
    content: string

    @OneToMany(() => NewsViews, (news_views) => news_views.newss)
    newss: Relation<NewsViews[]>
}