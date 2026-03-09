import { BaseModel } from "src/core/base-model";
import { Column, Entity } from "typeorm";

@Entity("Terms")
export class Terms extends BaseModel {

    @Column({type: "text"})
    content: string
}