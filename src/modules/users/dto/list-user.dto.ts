import {Expose} from "class-transformer";
import {Roles} from "../../../common/enums/roles.enum";
import {Gender} from "../../../common/enums/gender.enum";

export class UserListDto {

    @Expose()
    id: number;

    @Expose()
    role: Roles;

    @Expose()
    login: string;

    @Expose()
    password: string;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    middleName: string;

    @Expose()
    profileImage: string;

    @Expose()
    birthDate: Date;

    @Expose()
    gender: Gender;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

}