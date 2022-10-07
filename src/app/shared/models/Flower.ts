export interface IFlower {
    favorite: boolean;
    id: number;
    latin_name: string;
    name: string;
    profile_picture: string;
    sightings: number;
    features: string[];
    description: string;
}

export interface IFavorite {
    id: number;
    user_id: number;
    flower: IFlower
}