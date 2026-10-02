import jwt from "jsonwebtoken";
import "dotenv/config";
import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";


export async function postLoginAuthService(loginData) {

    const userData = await prisma.user.findUnique({
        where: {
            email: loginData.email
        }
    });


    if (!userData) {
        throw new Error("User not found");
    }


    const isPasswordCorrect = await bcrypt.compare(
        loginData.password,
        userData.password
    );


    if (!isPasswordCorrect) {
        throw new Error("Invalid password");
    }


    const token = jwt.sign(
        {
            id: userData.id,
            role: userData.role
        },

        process.env.JWT_SECRET,

        {
            expiresIn: "1h"
        }
    );


    return {
        success: true,
        message: "Login successful",
        token: token,
        role: userData.role,
        id: userData.id
    };
}


export async function postRegisterAuthService(registerData) {

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            email: registerData.email
        }
    });


    if (existingUser) {
        throw new Error("Email already registered");
    }


    // Check if password and confirm password match
    if (registerData.password !== registerData.confirmPassword) {
        throw new Error("Passwords do not match");
    }


    // Hash password before storing it
    const hashedPassword = await bcrypt.hash(
        registerData.password,
        10
    );


    // Create new user
    const newUser = await prisma.user.create({
        data: {
            name: registerData.name,
            email: registerData.email,
            password: hashedPassword,
            role: registerData.role
                    }
    });


    return {
        success: true,
        message: "Registration successful",
        id: newUser.id
    };
}



/*
NOTES

1.The 10 is called the salt rounds or cost factor.
A salt is additional random data used during password hashing.
It controls how computationally expensive the hashing process is.
*/