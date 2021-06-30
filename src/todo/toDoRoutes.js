import { Router } from "express";
import AddToDo from "./addtodo/addtodo.js";
import getAllUsers from "./getalltodo.js";
const router = Router();

router.post("/addToDo", AddToDo);
router.get("/getAllToDo", getAllUsers);
export default router;
