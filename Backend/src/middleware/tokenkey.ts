import { Request, Response, NextFunction } from "express";
import Token from "../models/token";
import { code } from "../config/responseCodes";

export const checkToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        if(!req?.headers['token']){
            res.json({
                code: code.failed,
                message: "Header: token is required"
            });return;
        }
        const token = req.headers['token'];
        const result = await Token.findOne({ where: { token: token, active: 1 } });
        if (result) {
            next();
        }else{
            res.status(code.failed).json({
                code: code.failed,
                message: "Invalid or Inactive token"
            });
        }
    } catch (err: any) {
        res.status(code.error).json({
            code: code.error,
            message: err.message,
            stack: err.stack
        });
    }

}