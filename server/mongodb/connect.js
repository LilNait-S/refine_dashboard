import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("mongodb conectado"))
    .catch((e) => console.log(e));
};

export default connectDB;
