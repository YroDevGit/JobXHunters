import crypto from "crypto";
import { Request, Response } from "express";
import { code } from "../../config/responseCodes";
import { body, validationResult } from "express-validator";
import ApiKey from "../../models/ApiKey";
import { hashedPassword } from "../../helper/securityHelper";

const validate = () => [
    body("username").notEmpty().withMessage("Username is required").isEmail().withMessage("username should be a valid email"),
    body("password").notEmpty().withMessage("Password is required").isLength({ min: 8 }).withMessage("Password should have 8 or more characters")
];

//add apikey
export const addApikey = [
    ...validate(),
    async (req: Request, res: Response): Promise<any> => {
        try {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                res.status(code.failed).json({
                    code: code.failed,
                    message: "Validation failed",
                    errors: error
                }); return;
            }

            const input = req.body;
            const username = input.username;
            const password = input.password;
            const apiKey = crypto.randomBytes(32).toString("hex");
            const result = await ApiKey.create({
                user: username,
                password: await hashedPassword(password),
                apikey: apiKey
            });

            res.status(code.success).json({
                code: code.success,
                message: "OK",
                req: req.body,
                res: result
            });

        } catch (err: any) {
            res.status(code.error).json({
                code: code.error,
                message: "ERROR",
                errors: err.message,
                stack: err.stack
            });
        }
    }
]

