export interface IPost {
    id: number;
    title: string;
    body: string;
    comments?: IComment[]
}

export interface IComment {
    id: number;
    postId: number;
    body: string;
}
