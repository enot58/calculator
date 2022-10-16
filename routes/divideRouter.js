import express from "express";
import operatorMiddleware from "../middleware/operatorMiddleware.js";
import DivideController from "../controller/divideController.js";
const router = express.Router();

router.get("/", operatorMiddleware, DivideController.getResult)


export default router;