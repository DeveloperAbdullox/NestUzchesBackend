import { BaseModel } from "src/core/base-model";
import { User } from "src/features/authentication/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { Book } from "./book.entity";

@Entity("BookRewiew")
export class BookRewiew extends BaseModel {

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.bookRewiew, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: Relation<User>

    @Column()
    bookId: number

    @ManyToOne(() => Book, (book) => book.bookRewiew, {onDelete: "CASCADE"})
    @JoinColumn({name: "bookId"})
    book: Relation<Book>

    @Column()
    rating: number

    @Column({length: 256, nullable: true})
    comment: string
}