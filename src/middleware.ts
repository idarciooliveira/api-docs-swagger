import { NextFunction, Request, Response } from "express";

export default function(request: Request, response: Response, next: NextFunction){
    const token = request.headers.authorization;

    if(!token) return response.status(401).json({message: 'Unathorazed!'});

    const [, key] = token.split(' ');

    if(key){
        return next();
    }

    return response.status(401).json({message: 'Unathorazed!'});
}