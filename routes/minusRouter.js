import express from "express";
import operatorMiddleware from "../middleware/operatorMiddleware.js";
import minusController from "../controller/minusController.js";
const router = express.Router();


router.get('/', operatorMiddleware, minusController.getResult)


export default router;