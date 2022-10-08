import { IFlower } from "./shared/models/Flower";
import { ISighting } from "./shared/models/Sighting";
import { IUser } from "./shared/models/User";

export interface AppState {
    authToken: string;
    user: IUser;
    flowers: IFlower[];
    favorites: IFlower[];
    sightings: ISighting[];
}