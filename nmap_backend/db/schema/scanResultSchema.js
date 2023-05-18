import mongoose, { Schema } from "mongoose";
import openPortSchema from "./openPortSchema.js";

const scanResultSchema = new mongoose.Schema({
  ip_address: String,
  host_name: String,
  open_ports: [{ type: Schema.Types.ObjectId, ref: "openPort" }],
});

export default scanResultSchema;
