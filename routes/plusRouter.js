import express from "express";
import OperatorController from "../controller/plusController.js";
import operatorMiddleware from "../middleware/operatorMiddleware.js";
const router = express.Router()


router.get('/', operatorMiddleware,OperatorController.getResult)




export default router;
