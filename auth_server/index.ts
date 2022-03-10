const express = require("express");
const database: any = require("./src/configurations/database");
const app = express();
const port = 3001;
const authRoutes = require("./src/routes/auth.route");
const cors = require("cors");
const supertokens_ = require("supertokens-node");
const { errorHandler } = require("supertokens-node/framework/express");
const superTokenConfiguration = require("./src/configurations/superToken");
const { middleware } = require("supertokens-node/framework/express");

database.databaseContectivity("mongodb");

superTokenConfiguration.initFn;

// ...other middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens_.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(middleware());

// Add this AFTER all your routes
app.use(errorHandler());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
