import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({type: "timestamptz"})
    createdAt: Date

    @UpdateDateColumn({type: "timestamptz"})
    updateAt: Date
}