"use strict";

const chatRoute = require("express").Router();
const chatController = require("../controllers/chat.controller.ts");

chatRoute.post("/sendmessage", chatController.sendMessage);

module.exports = chatRoute;
