import { BaseModel } from "src/core/base-model";
import { Book } from "src/features/books/entitiy/book.entity";
import { Column, Entity, OneToMany, Relation } from "typeorm";

@Entity("Author")
export class Author extends BaseModel {

    @Column({length: 64})
    fullName: string

    @OneToMany(() => Book, (book) => book.author)
    authors: Relation<Book[]>
}