import express from "express";
import plusRouter from "./plusRouter.js";
import minusRouter from "./minusRouter.js";
import multiplyRouter from "./multiplyRouter.js";
import divideRouter from "./divideRouter.js";
import otherPage from "./otherPage.js";
const router = express.Router()



router.use("/plus", plusRouter)
router.use("/minus", minusRouter)
router.use("/multiply", multiplyRouter)
router.use("/divide", divideRouter)
router.use("*", otherPage)


export default router;
