export interface IPost {
    id: number;
    title: string;
    body: string;
}

export interface IComment {
    postId: number;
    body: string;
}
