import { check } from "express-validator";

export const validateLogin = [
    check("username").exists().isString(),
    check("password").exists().isString(),
]