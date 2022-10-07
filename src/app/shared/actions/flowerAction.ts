import { Action } from "@ngrx/store";
import { IFlower } from "../models/Flower";

export const SETDATA = '[FLOWER] SETDATA';
export const TOGGLE = '[FLOWER] TOGGLE';

export class SetFlowers implements Action {
    readonly type: string = SETDATA;

    constructor(public payload: IFlower[]) { }
}

export class ToggleFlower implements Action {
    readonly type: string = TOGGLE;

    constructor(public payload: IFlower) { }
}

export type FavoriteActions = SetFlowers | ToggleFlower;