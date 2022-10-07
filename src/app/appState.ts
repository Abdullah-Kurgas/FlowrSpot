import { IFlower } from "./shared/models/Flower";
import { IUser } from "./shared/models/User";

export interface AppState {
    authToken: string;
    user: IUser;
    flowers: IFlower[];
}