import { IAuthor } from "./Author.interface";

export interface IPost {
    url: string;
    date: string;
    likesNumber: number;
    author: IAuthor;
}
