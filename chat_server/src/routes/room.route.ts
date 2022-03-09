"use strict";

const roomRoute = require("express").Router();
const roomControlller = require("../controllers/rooms.controller.ts");

roomRoute.post("/login", roomControlller.createRoom);
roomRoute.post("/signup", roomControlller.getRoomsById);

module.exports = roomRoute;
