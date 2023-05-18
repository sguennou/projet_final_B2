import mongoose from "mongoose";
import scanResultSchema from "../schema/scanResultSchema.js";

const scanResult = mongoose.model(
  "scanResult",
  scanResultSchema,
  "scanResults"
);

export default scanResult;
