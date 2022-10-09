import { IFlower } from "./Flower";

export class Sighting {
    description?: string;
    flower_id?: number;
    id?: number;
    latitude?: number;
    longitude?: number;
    name?: string;
    picture?: string;
}

export interface ISighting {
    comments_count: number;
    created_at: string;
    description: string;
    flower: IFlower;
    id: number;
    latitude: number;
    likes_count: number;
    longitude: number;
    name: string;
    picture: string;
    user: {id: number, full_name: string};
}