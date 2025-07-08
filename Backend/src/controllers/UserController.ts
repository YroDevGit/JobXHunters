import User from "@/models/User";
import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { code } from "@/config/responseCodes";
import { hashedPassword } from "@/helper/securityHelper";
import { duplicateError } from "@/helper/dbvalidationHelper";
import { Op } from "sequelize";

const validate = ():any => [
    body("firstname").notEmpty().withMessage("firstname is required"),
    body("lastname").notEmpty().withMessage("lastname is required"),
    body("username").notEmpty().withMessage("username is required")
    .isEmail().withMessage("username should be a valid email"),
    body("password").notEmpty().withMessage("password is required")
]

//add User
export const addUser = [
    ...validate(),
    async (req: Request, res: Response): Promise<any> => {
        try {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                res.status(code.failed).json({
                    code: code.valfailed,
                    message: "Validation failed",
                    errors: error
                }); return;
            }
            let data = req.body;
            data.password = await hashedPassword(data.password);
            const result = await User.create(data);
            res.status(code.success).json({
                code: code.success,
                message: "OK",
                req: data,
                res: result
            });
        } catch (err: any) {
            const duplicate = duplicateError(err);
            if (duplicate) {
                res.status(code.error).json({
                    code: code.error,
                    message: duplicate.message ?? "Validation error",
                    errors: duplicate
                });
            } else {
                res.status(code.error).json({
                    code: code.error,
                    message: err.message,
                    stack: err.stack
                });
            }
        }
    }
];


//delete // set status to 0
export const toggleStatus = [
    async (req: Request, res: Response): Promise<any> => {
        try {
            if (!req.query?.id || !req.query?.status) {
                res.status(code.failed).json({
                    code: code.valfailed,
                    message: "param: id and status is required"
                }); return;
            }
            const id = req.query.id;
            const result = await User.update({ status: req.query.status }, { where: { id: id } });
            res.status(code.success).json({
                code: code.success,
                message: "OK",
                id: id,
                result: result,
                query: req.query
            });
        } catch (err: any) {
            res.status(code.error).json({
                code: code.error,
                message: err.message,
                stack: err.stack
            });
        }
    }
];


//Get all users
export const getAllUsers = [
    async (req: Request, res: Response): Promise<any> => {
        try {
            const users = await User.findAll();
            res.status(code.success).json({
                code: code.success,
                message: "OK",
                data: users
            });
        } catch (err: any) {
            res.status(code.error).json({
                code: code.error,
                message: err.message,
                stack: err.stack
            });
        }
    }
];

export const searchUser = [
    async (req: Request, res: Response): Promise<any> => {
        try {
            if (!req.query?.search) {
                res.status(code.failed).json({
                    code: code.valfailed,
                    message: "Param: search not found"
                }); return;
            }
            const searchkey = req.query.search;
            const result = await User.findAll({
                where: {
                    [Op.or]: [
                        { firstname: { [Op.like]: `%${searchkey}%` } },
                        { lastname: { [Op.like]: `%${searchkey}%` } },
                        { middlename: { [Op.like]: `%${searchkey}%` } },
                        { username: { [Op.like]: `%${searchkey}%` } }
                    ]
                }
            });
            res.status(code.success).json({
                code: code.success,
                message: "OK",
                search: searchkey,
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
];


// Update User
export const updateUser = [
    ...validate(),
    async (req: Request, res: Response): Promise<any> => {
        try {
            if (!req.params?.id) {
                res.status(code.failed).json({
                    code: code.valfailed,
                    message: "param: id not found.!"
                }); return;
            }

            const result = await User.update(req.body, { where: { id: req.params.id } });
            res.status(code.success).json({
                code: code.success,
                message: "OK",
                result: result
            });

        } catch (err: any) {
            const duplicate = duplicateError(err);
            if (duplicate) {
                res.status(code.error).json({
                    code: code.error,
                    message: duplicate.message,
                    stack: duplicate
                });
            } else {
                res.status(code.error).json({
                    code: code.error,
                    message: err.message,
                    stack: err.stack
                });
            }
        }
    }
];

