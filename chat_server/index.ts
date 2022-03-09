const express = require("express");
const database = require("./src/configurations/database");
const app = express();
const port = 3001;
const roomRoutes = require("./src/routes/room.route");

database.databaseContectivity("mongodb");

app.get("/chat/healthcheck", (req: any, res: any) => {
  res.send("chat server");
});

app.use("/room", roomRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
