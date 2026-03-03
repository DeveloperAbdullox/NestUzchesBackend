import { BaseModel } from "src/core/base-model";
import { Column, Entity } from "typeorm";

@Entity("Book")
export class Book extends BaseModel{
    @Column({length: 128})
    title: string

    @Column({type: "text"})
    description: string

    @Column({length: 128, nullable: true})
    image: string

    @Column({type: "decimal", precision: 12, scale: 2})
    price: string

    @Column({type: "decimal", scale: 2, precision: 12, nullable: true})
    newPrice: string

    @Column({type: "decimal", precision: 2, scale: 1, nullable: true})
    rating: string

    @Column({default: 0})
    rewiewsCount: number

    @Column()
    pages: number

    @Column({type: "date"})
    pubDate: Date
}