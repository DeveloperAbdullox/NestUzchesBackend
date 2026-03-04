import { LoginType } from "src/core/enums/loginType";
import { Role } from "src/core/enums/role";
import { BaseModel } from "src/core/base-model";
import { Column, Entity, OneToMany, Relation } from "typeorm";
import { OtpCode } from "./otp.code.entity";
import { UserLessons } from "src/features/common/entity/userLessons.entity";
import { CoursePurchased } from "src/features/courses/entity/coursePurchased.entity";
import { CourseLikes } from "src/features/courses/entity/courseLikes.entity";
import { CourseRewiew } from "src/features/courses/entity/courseRewiew.entity";


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
    isVerified: boolean

    @Column({type: "boolean", default: false})
    isActive: boolean

    @OneToMany(() => OtpCode, (otp) => otp.user)
    otpCodes: Relation<OtpCode[]>

    @OneToMany(() => UserLessons, (lesson) => lesson.user)
    lessons: Relation<UserLessons[]>

    @OneToMany(() => CoursePurchased, (purchased) => purchased.user)
    coursePurchased: Relation<CoursePurchased[]>

    @OneToMany(() => CourseLikes, (likes) => likes.user)
    courseLikes: Relation<CourseLikes[]>

    @OneToMany(() => CourseRewiew, (rewiew) => rewiew.user)
    courseRewiew: Relation<CourseRewiew[]>
}