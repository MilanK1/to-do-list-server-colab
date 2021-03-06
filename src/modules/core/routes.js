import infoRouter from "../../info/infoRoutes.js";
import homeRouter from "../../home/homeRoutes.js";
import toDoRouter from "../../todo/toDoRoutes.js";

export default function routes(app) {
  app.use("/todo", toDoRouter);
  app.use("/info", infoRouter);
  app.use("/", homeRouter);


}
