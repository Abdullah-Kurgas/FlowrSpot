import { Action } from "@ngrx/store";
import { IFavorite } from "../models/Flower";

export const SETDATA = '[FAVORITE] SETDATA';
export const TOGGLE = '[FAVORITE] TOGGLE';

export class SetFavorites implements Action {
    readonly type: string = SETDATA;

    constructor(public payload: IFavorite[]) { }
}

export class ToggleFavorite implements Action {
    readonly type: string = TOGGLE;

    constructor(public payload: IFavorite) { }
}

export type FavoriteActions = SetFavorites | ToggleFavorite;