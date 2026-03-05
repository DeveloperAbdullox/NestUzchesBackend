import { BaseModel } from "src/core/base-model";
import { User } from "src/features/authentication/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { News } from "./news.entity";

@Entity("NewsViews")
export class NewsViews extends BaseModel {

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.newsViews, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User>
 
    @Column()
    newsId: number

    @ManyToOne(() => News, (news) => news.newss, {onDelete: "CASCADE"})
    @JoinColumn({name: "newsId"})
    newss: Relation<News>

    @Column({type: "timestamp"})
    firstDate: Date

    @Column({type: "timestamp"})
    lastDate: Date

    @Column({default: 1})
    count: number
}