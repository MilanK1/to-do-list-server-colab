import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  inputValue: {
    type: String,
    required: true,
    unique: false
  },
});

export default mongoose.model("User", userSchema);
