import { Router } from "express";
import info from "./info.js";

let router = Router();

router.post("/", info);

export default router;