import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany, Relation } from "typeorm";
import { Book } from "./book.entity";

@Entity("BookCategory")
export class BookCategory extends BaseModel {

    @Column({length: 64})
    title: string

    @OneToMany(() => Book, (book) => book.category)
    book: Relation<Book[]>
}