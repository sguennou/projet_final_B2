import mongoose from "mongoose";

const openPortSchema = new mongoose.Schema({
  port_number: Number,
  protocol: String,
  service_name: String,
  banner: String,
});

export default openPortSchema;
