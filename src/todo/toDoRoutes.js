import { Router } from "express";
import AddToDo from "./addtodo/addtodo.js";
import getAllUsers from "./getalltodo.js";
import deleteToDoById from "./deletetodo.js";
const router = Router();

router.post("/addToDo", AddToDo);
router.get("/getAllToDo", getAllUsers);
router.delete("/:id", deleteToDoById);
export default router;
