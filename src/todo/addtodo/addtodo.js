import User from "../Models.js";

export default function AddToDo(req, res) {
  console.log("POSTREQ:", req.body);
  const newUser = new User({
    text: req.body.text
  });
  newUser
      .save()
      .then(() => {
        res.status(200).json("AddToDo operation was successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  console.log("POST");
}
