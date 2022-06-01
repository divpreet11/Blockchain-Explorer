import { Router } from 'express';


export interface IResponseType<T = void> {
    status: number,
    message: string,
    data?: T
}


export interface Controller {
    path: string;
    router: Router;
}

