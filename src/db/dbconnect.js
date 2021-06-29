import mongoose from "mongoose";

function dbconnect() {
  //mongoose.connect('mongodb://localhost/express', {
  mongoose.connect(
    "mongodb+srv://admin:PkKWguobxPOZzKVz@cluster0.golkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("DB IS NOW CONNECTED");
  }).catch((error) => console.log("Not Connected"));
}

export default dbconnect;

