import { Action } from "@ngrx/store";
import { ISighting } from "../models/Sighting";


export const SETDATA = '[SIGHTING] SETDATA';
export const CREATE = '[SIGHTING] CREATE';
export const REMOVE = '[SIGHTING] REMOVE';

export class SetData implements Action {
    readonly type: string = SETDATA;

    constructor(public payload: ISighting[]) {}
}

export class Create implements Action {
    readonly type: string = CREATE;

    constructor(public payload: ISighting) {}
}

export class Remove implements Action {
    readonly type: string = REMOVE;

    constructor(public payload: ISighting) {}
}

export type SightingAction = SetData | Create | Remove;