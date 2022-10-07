import { IUser } from "./shared/models/User";

export interface AppState {
    readonly authToken: string;
    readonly user: IUser;
}