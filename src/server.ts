import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import dotenv from "dotenv";
import { InternalError, notFoundedUrlError } from "./routes/errorHandler";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use('/', router);
app.use(notFoundedUrlError);
app.use(InternalError);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on link: http://localhost:${process.env.PORT}`)
});