import * as Sighting from "../actions/sightingAction";
import { ISighting } from "../models/Sighting";


export function sightingReducer(state: ISighting[], action: any) {
    switch (action.type) {
        case Sighting.SETDATA:
            return state = action.payload;

        case Sighting.CREATE:
            let updatedState = [...state];
            updatedState.push(action.payload);

            return state = updatedState;

        case Sighting.REMOVE:
            let removedState = [...state];
            let index = removedState.findIndex(item => item.id == action.payload.id);
            removedState.splice(index, 1);

            return state = removedState;
        
        default:
            return state;
    }
}