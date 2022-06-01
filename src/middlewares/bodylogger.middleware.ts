
import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {

    console.log(req.path, req.body || "its get request");
    next()
}