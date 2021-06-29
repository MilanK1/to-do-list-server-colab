import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  inputValue: {
    type: String,
    required: true,
    unique: true
  },
  _id: {
    type: String,
    required: false,
    unique: true
  }
});

export default mongoose.model("User", userSchema);
