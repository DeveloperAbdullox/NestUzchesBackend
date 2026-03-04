import { BaseModel } from "src/core/base-model";
import { User } from "src/features/authentication/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { Book } from "./book.entity";

@Entity("BookLikes")
export class BookLikes extends BaseModel {

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.bookLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User>

    @Column()
    bookId: number

    @ManyToOne(() => Book, (book) => book.bookLikes, {onDelete: "CASCADE"})
    @JoinColumn({name: "bookId"})
    book: Relation<Book>

    @Column({type: "timestamp"})
    date: Date
}