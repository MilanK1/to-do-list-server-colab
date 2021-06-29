import express from "express";
import routes from "./modules/core/routes.js";
import dbconnect from "./db/dbconnect.js";
import morgan from 'morgan'
const PORT = 8001;
const app = express();
//logger
app.use(morgan("dev"))

//Connecting the db server
dbconnect(app);
//All the routes
routes(app);

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}/`)
);
