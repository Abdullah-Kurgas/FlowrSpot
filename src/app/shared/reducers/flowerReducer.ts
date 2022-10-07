import * as Actions from "../actions/flowerAction";
import { IFlower } from "../models/Flower";

export function flowerReducer(state: IFlower[], action: any) {
    switch(action.type) {
        case Actions.SETDATA:
            return state = action.payload;

        case Actions.TOGGLEFAVORITE:
            return state = manageData([...state], {...action.payload});

        default:
            return state;
    }
};

const manageData = (data: IFlower[], flower: IFlower): IFlower[] => {
    let index = data.findIndex(item=> item.id == flower.id);
    flower.favorite = !flower.favorite;
    data[index]= flower;

    return data;
}