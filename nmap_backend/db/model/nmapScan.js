import mongoose from "mongoose";
import nmapScanSchema from "../schema/nmapScanSchema.js";

const NmapScan = mongoose.model("NmapScan", nmapScanSchema, "nmapScans");

export default NmapScan;
