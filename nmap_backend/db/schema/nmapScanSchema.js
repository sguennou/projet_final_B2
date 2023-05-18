import mongoose, { Schema } from "mongoose";
import scanResultSchema from "./scanResultSchema.js";

const nmapScanSchema = new mongoose.Schema({
  started_at: Date,
  finished_at: Date,
  command_line: String,
  options: [{type: String}],
  scan_results: { type: Schema.Types.ObjectId, ref: "scanResult" },
});

export default nmapScanSchema;

