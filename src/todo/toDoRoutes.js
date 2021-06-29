import { Router } from "express";
import AddToDo from "./addtodo/addtodo.js";

const router = Router();

router.post("/addToDo", AddToDo);

export default router;