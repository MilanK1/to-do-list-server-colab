import { Router } from "express";
import info from "./info.js";

let router = Router();

router.get("/", info);

export default router;
