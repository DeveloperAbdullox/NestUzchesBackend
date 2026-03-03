import { LoginType } from "src/core/enums/loginType";
import { Role } from "src/core/enums/role";
import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany, Relation } from "typeorm";
import { OtpCode } from "./otp.code.entity";


@Entity("User")
export class User extends BaseModel {

    @Column({type: "enum", enum: Role, default: Role.User})
    role: Role

    @Column({length: 64})
    fullName: string

    @Column({length: 128, nullable: true})
    profileImage: string

    @Column({length: 64, unique: true})
    login: string

    @Column({type: "enum", enum: LoginType, })
    loginType: LoginType

    @Column({length: 128, nullable: true})
    password: string

    @Column({type: "date", nullable: true})
    birthDate: Date

    @Column({type: "boolean", default: false})
    isVerified: string

    @Column({type: "boolean", default: false})
    isActive: string

    @OneToMany(() => OtpCode, (otp) => otp.user)
    otpCodes: Relation<OtpCode[]>
}