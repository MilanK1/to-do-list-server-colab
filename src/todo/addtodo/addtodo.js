import User from "../Models.js";

export default function AddToDo(req, res) {
  const newUser = new User({
    inputValue: req.body.inputValue
  });
  newUser.save().then(() => {
    res.status(200).json("AddToDo operation was successful!");
  });
}
