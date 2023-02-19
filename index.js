import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log(`Server up and running in 5000`))