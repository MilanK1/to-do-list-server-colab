import mongoose from "mongoose";
const AddToDoSchema = mongoose.Schema;

const UserAddToDoSchema = new AddToDoSchema({
  inputValue: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("AddToDo", UserAddToDoSchema);
