import express,{Request, Response, NextFunction} from "express";
const router = express.Router();
import { addUser, toggleStatus, getAllUsers,updateUser, searchUser } from "../controllers/UserController";
import { loginUser, logoutUser } from "../controllers/AuthController";
import { checkToken } from '../middleware/tokenkey';

//User routes
router.post("/user/add", addUser);
router.post("/user/toggleStatus",checkToken, toggleStatus);
router.get("/user/getall",checkToken, getAllUsers);
router.post("/user/update/:id",checkToken, updateUser);
router.post("/user/searchUser",checkToken, searchUser);

//Auth routes
router.post("/user/login", loginUser);
router.post("/user/logout/:user", logoutUser);

export default router;