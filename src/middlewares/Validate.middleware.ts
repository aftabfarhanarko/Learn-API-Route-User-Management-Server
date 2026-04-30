import { NextFunction, Request, Response } from "express"
import { sendResponse } from "../utlis/sendResponse";



export const validate = (schema: Joi:ObjectSchema) => {
     return (req: Request, res:Response , next: NextFunction ) => {
        const {error} = schema.validate(req.body, {abortEarly: false});
        if(error){
            const errors = error.details.map((detail) => detail.message);
            return sendResponse(res, 400 , false, 'Validation error', null , errors)
        }
        next();
     };
};