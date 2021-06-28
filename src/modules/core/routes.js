import infoRouter from "../../info/Routes.js";

export default function routes(app) {
  app.use("/info", infoRouter);
}