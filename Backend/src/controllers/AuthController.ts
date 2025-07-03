import { comparePassword } from "../helper/securityHelper";
import { Request, Response } from "express";
import { body, param, validationResult } from "express-validator";
import { code } from "../config/responseCodes";
import User from "../models/User";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { authLogin, authLogout } from "../helper/authHelper";
import Token from "../models/token";

const validate = (): any => [
    body("username").notEmpty().withMessage("username is required")
        .isEmail().withMessage("username should be a valid email"),
    body("password").notEmpty().withMessage("password is required")
];

//Login user
export const loginUser = [
    ...validate(),
    async (req: Request, res: Response): Promise<any> => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(code.failed).json({
                    code: code.failed,
                    message: "Body Validation Failed",
                    errors: errors
                }); return;
            }
            const JWT_SECRET = 'nyaak';
            const data = req.body;
            const result = await User.findOne({ where: { username: data.username } });
            if (result) {
                const pass = result.getDataValue("password");
                const verifyPassword = await comparePassword(data.password, pass);
                if (verifyPassword) {
                    const username = data.username;
                    const id = result.getDataValue("id");
                    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

                    const checkToken = await Token.findAll({ where: { userid: id, active: 1 } });

                    if (Object.keys(checkToken).length > 0) {
                        res.status(code.failed).json({
                            code: process.env.DUPLICATE_ERROR,
                            message: `User ${username} is already login.!`,
                            result: checkToken
                        }); return;
                    }
                    const regAuth = await authLogin(id, username, token, 1, req.body.device ?? "unkown", req.body.unit ?? "unknown");
                    res.status(code.success).json({
                        code: code.success,
                        message: "OK",
                        result: result,
                        regAuth: regAuth,
                        id: id
                    });
                } else {
                    res.status(code.failed).json({
                        code: process.env.NO_RESULT_FOUND,
                        message: "Incorrect password"
                    }); return;
                }
            } else {
                res.status(code.failed).json({
                    code: process.env.NO_RESULT_FOUND,
                    message: "Account not found"
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
];


export const logoutUser = [
    param("user").notEmpty().withMessage("param: user is required"),
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

            const result = await authLogout(parseInt(req.params.user));
            res.status(code.success).json({
                code: code.success,
                message: "OK",
                result: result
            });
        } catch (err: any) {
            res.status(code.error).json({
                code: code.error,
                message: err.message,
                stack: err.stack
            });
        }

    }
]