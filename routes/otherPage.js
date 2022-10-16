import express from "express";
const router = express.Router()

router.get("*", (req, res) => {
    res.send(404, "Данной страницы не существует.")

})


export default router;