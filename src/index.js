import express from "express";
import home from "./home/home.js";
import routes from "./modules/core/routes.js";

const app = express();
const PORT = 8000;

routes(app);

app.listen(PORT, () => {
});

//app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}/`));

console.log("Test");
