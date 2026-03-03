import { BaseModel } from "src/core/base-model";
import { Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { OtpType } from "src/core/enums/otp-type";

export class OtpCode extends BaseModel {
    @Column()
    userId: number

    @ManyToOne(() => User, (user)=> user.otpCodes, {onDelete: "CASCADE"})
    user: User

    @Column({length: 6})
    code: string

    @Column({type: "enum", enum: OtpType})
    type: OtpType
}