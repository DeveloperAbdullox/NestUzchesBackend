import { BaseModel } from "src/core/base-model";
import { Column, Entity } from "typeorm";

@Entity("Author")
export class Author extends BaseModel {

    @Column({length: 64})
    fullName: string
}