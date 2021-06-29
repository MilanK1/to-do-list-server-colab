import express from "express";
import routes from "./modules/core/routes.js";
import dbconnect from "./db/dbconnect.js";
import morgan from "morgan";

//End of all the imports

const PORT = 8001;
const app = express();
//Logger
app.use(morgan("dev"));
//Connecting the db server
dbconnect(app);
//All the routes
routes(app);
//Add To Do Schema

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}/`)
);
