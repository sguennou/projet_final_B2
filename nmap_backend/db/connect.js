import mongoose from "mongoose";

const mongo = async function () {
  return await mongoose.createConnection("mongodb://localhost:27017/db");
};

export default mongo;
