import User from "./Models.js";

export default function deleteToDoById(req, res) {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("ID delete error");
    });
}