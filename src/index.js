import express from "express";
import home from "./home/home.js";
import routes from "./modules/core/routes.js";
import dbconnect from "./db/dbconnect.js";

const app = express();
const PORT = 8001;
//Connecting the db server
dbconnect(app);
//All the routes
routes(app);

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}/`)
);
