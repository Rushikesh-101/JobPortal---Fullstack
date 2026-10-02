import jwt from "jsonwebtoken";


export function authMiddleware(req, res, next) {

    try {

        const token = req.cookies.token;

        if (!token) {

            return res.status(401).json({
                success: false,
                message: "Identification error"
            });

        }

        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decodedToken;
        next();

    } catch (error) {

        if (error.name === "TokenExpiredError") {

            return res.status(401).json({
                success: false,
                message: "Login expired"
            });

        }

        return res.status(401).json({
            success: false,
            message: "Identification error"
        });
    }
}