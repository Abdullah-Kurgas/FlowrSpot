import { Action } from "@ngrx/store";
import { IFlower } from "../models/Flower";

export const SETDATA = '[FLOWER] SETDATA';
export const TOGGLEFAVORITE = '[FLOWER] TOGGLEFAVORITE';

export class SetFlowers implements Action {
    readonly type: string = SETDATA;

    constructor(public payload: IFlower[]) { }
}

export class ToggleFavorite implements Action {
    readonly type: string = TOGGLEFAVORITE;

    constructor(public payload: IFlower) { }
}

export type FavoriteActions = SetFlowers | ToggleFavorite;