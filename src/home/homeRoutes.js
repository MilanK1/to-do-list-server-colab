import { Router } from "express";
import home from "./home.js";

let router = Router();

router.get("/", home);

export default router;
