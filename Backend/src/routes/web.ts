import express, { Request, Response } from "express";
import {apiKeyMiddleware}  from "../middleware/apikey";
import { addApikey } from "../controllers/generate/makeApikey";
const router = express.Router();


router.post("/apikey/add", addApikey);


export default router;
