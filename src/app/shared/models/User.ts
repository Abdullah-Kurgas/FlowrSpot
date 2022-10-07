export class User {
    first_name!: string;
    last_name!: string;
    date_of_birth!: string;
    email!: string;
    password!: string;
}

export interface IUser {
    id?: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    email: string;
    password: string;
}