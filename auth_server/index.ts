const express = require("express");
const database: any = require("./src/configurations/database");
const app = express();
const port = 3000;
const authRoutes = require("./src/routes/auth.route");

database.databaseContectivity("mongodb");

app.get("/auth/healthcheck", (req: any, res: any) => {
  console.log("auth ");
  res.send("auth server");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
