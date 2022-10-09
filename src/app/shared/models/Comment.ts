export class Comment {
    content?: string;
}

export interface IComment {
    id: number;
    user_id: number;
    user_full_name: string;
    sighting_id: number;
    content: string;
}
