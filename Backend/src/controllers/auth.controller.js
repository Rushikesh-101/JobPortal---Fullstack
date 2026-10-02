import {
    postLoginAuthService,
    postRegisterAuthService
} from "../services/auth.services.js";


export async function postLoginAuthController(req, res) {

    console.log("Auth controller invoked");

    try {

        const loginData = req.body;

        const loginStatus = await postLoginAuthService(loginData);


        res.cookie(
            "token",
            loginStatus.token
        );


        res.status(200).json({
            success: true,
            message: "Login successful",
            role: loginStatus.role,
            id: loginStatus.id
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Login failed"
        });
    }
}


export async function postRegisterAuthController(req, res) {

    try {

        const registerData = req.body;

        const registerStatus = await postRegisterAuthService(
            registerData
        );


        res.status(201).json(registerStatus);

    } catch (error) {

        console.error(error);


        if (error.message === "Email already registered") {

            return res.status(409).json({
                success: false,
                message: error.message
            });
        }


        if (error.message === "Passwords do not match") {

            return res.status(400).json({
                success: false,
                message: error.message
            });
        }


        res.status(500).json({
            success: false,
            message: "Registration failed"
        });
    }
}
