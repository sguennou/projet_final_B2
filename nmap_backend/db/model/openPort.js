import mongoose from "mongoose";
import openPortsSchema from "../schema/openPortSchema.js";


const openPort = mongoose.model("openPort", openPortsSchema, "openPorts");

export default openPort;
