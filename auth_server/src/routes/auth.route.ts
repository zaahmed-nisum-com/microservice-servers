"use strict";

const authRoute = require("express").Router();
const authController = require("../controllers/auth.controller.ts");

authRoute.post("/login", authController.login);
authRoute.post("/signup", authController.signUp);

module.exports = authRoute;
