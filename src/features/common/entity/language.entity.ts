import { BaseModel } from "src/core/base-model";
import { Column, Entity } from "typeorm";

@Entity("Language")
export class Language extends BaseModel {
    @Column({length: 32, unique: true})
    title: string

    @Column({length: 2, unique: true})
    code: string
}