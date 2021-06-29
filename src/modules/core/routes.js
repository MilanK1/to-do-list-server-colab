import infoRouter from "../../info/Routes.js";
import homeRoutes from "../../home/homeRoutes.js";
export default function routes(app) {
  app.use("/info", infoRouter);
  app.use("/", homeRoutes);
}