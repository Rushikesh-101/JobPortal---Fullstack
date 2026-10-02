import express from "express";
import {
    postLoginAuthController,
    postRegisterAuthController
} from "../controllers/auth.controller.js";

const authRouter = express.Router();


// Login route
authRouter.post(
    "/login",
    postLoginAuthController
);


// Register route
authRouter.post(
    "/register",
    postRegisterAuthController
);


export default authRouter;
