import * as Actions from "../actions/favoriteAction";
import { IFavorite } from "../models/Flower";

export function favoriteReducer(state: IFavorite[], action: any) {
    switch(action.type) {
        case Actions.SETDATA:
            return state = action.payload;

        case Actions.TOGGLE:
            return state = manageData([...state], {...action.payload});

        default:
            return state;
    }
};

const manageData = (data: IFavorite[], flower: IFavorite): IFavorite[] => {
    let index = data.findIndex(item=> item.id == flower.id);
    data.splice(index, 1);

    return data;
}