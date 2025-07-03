import { Op } from "sequelize";
import { body, validationResult } from "express-validator";
import { Request, Response } from "express";
import { code } from "../config/responseCodes";
import { Company } from "../models/Company";


const validate = (): any => [
    body("name").notEmpty().withMessage("name is required"),
    body("address").notEmpty().withMessage("address is required"),
    body("details").notEmpty().withMessage("details is required"),
    body("created_by").notEmpty().withMessage("created_by is required").isNumeric().withMessage("created_by should be a number")
];

export const addCompany = [
    ...validate(),
    async (req: Request, res: Response): Promise<any> => {
        try {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(code.failed).json({
                    code: code.valfailed,
                    message: "Validation failed",
                    errors: error
                });
            }

            const findCompany = await Company.findOne({where: {created_by: req.body.created_by}});
            if(findCompany){
                return res.status(code.failed).json({
                    code: code.dupfailed,
                    message: "You already created one, you can't add more"
                });
            }

            const result = await Company.create(req.body);
            res.status(code.success).json({
                code: code.success,
                message: "OK",
                res: result
            })
        } catch (err: any) {
            res.status(code.error).json({
                code: code.error,
                message: err.message,
                stack: err.stack
            });
        }



    }
];