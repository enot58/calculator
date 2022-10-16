import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import router from "./routes/index.js";
app.use(express.json());
const PORT = process.env.PORT || 7000;
app.use('/', router);



app.listen(PORT, () => {
    console.log(`Калькулятор запущен, порт - ${PORT}`)
})




