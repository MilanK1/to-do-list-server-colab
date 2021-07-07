import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  text: {
    type: String,
    required: false,
    unique: false
  },
  password: {
    type: String,
    required: false,
    unique: false
  },
  username: {
    type: String,
    required: false,
    unique: false
  }
});

export default mongoose.model("User", userSchema);
