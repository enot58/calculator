import express from "express";
import operatorMiddleware from "../middleware/operatorMiddleware.js";
import MultiplyRouter from "../controller/multiplyRouter.js";
const router = express.Router();


router.get('/', operatorMiddleware, MultiplyRouter.getResult)



export default router;