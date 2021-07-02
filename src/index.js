import express from "express";
import routes from "./modules/core/routes.js";
import dbconnect from "./db/dbconnect.js";
import morgan from "morgan";
import cors from "./modules/core/cores.js";
import parseResponse from "./modules/core/bodyParser.js";

//End of all the imports

const PORT = 8001;
const app = express();
//Logger
app.use(morgan("dev"));
//Connecting the db server
dbconnect(app);
//body parser
parseResponse(app);
//Cores
cors(app);
//All the routes
routes(app);


app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}/`)
);
