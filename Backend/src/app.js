import express from "express";
import cors from "cors";
import jobRouter from "./routes/job.route.js";
import applicationRouter from "./routes/applications.routes.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: "http://localhost:8080",
    credentials: true

}));

app.use(express.json());
app.use(cookieParser());

app.use("/jobs", jobRouter);
app.use("/applications", applicationRouter);
app.use("/auth", authRouter)

export default app;