import express from "express";
import mongoose from "mongoose";
import NmapScan from "./db/model/nmapScan.js";
import openPort from "./db/model/openPort.js";
import scanResult from "./db/model/scanResult.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

// Endpoint pour ajouter un nouveau scan
app.post("/nmapscan", async function (req, res) {
  // Création d'une nouvelle instance du modèle Scan

  try {
    const open_ports = new openPort({
      port_number: req.body.port_number,
      protocol: req.body.protocol,
      service_name: req.body.service_name,
      banner: req.body.banner,
    });
    await open_ports.save();

    const scan_result = new scanResult({
      ip_address: req.body.ip_address,
      host_name: req.body.host_name,
      open_ports: [open_ports._id],
    });
    await scan_result.save();

    const array_command = req.body.command_line.split(" ");
    let command = "";
    const options = [];
    array_command.forEach(function (str) {
      if (str.startsWith("-")) {
        options.push(str);
      } else {
        command += str + " ";
      }
    });

    const scan = new NmapScan({
      started_at: new Date(req.body.started_at),
      finished_at: new Date(req.body.finished_at),
      command_line: command,
      options: options,
      scan_results: scan_result._id,
    });

    // Sauvegarde du nouveau scan dans la base de données
    const newScan = await scan.save();
    res.status(201).json(newScan); // Renvoie la réponse en JSON avec le scan ajouté
  } catch (error) {
    res.status(400).json({ message: error.message }); // Gestion des erreurs
  }
});

app.get("/nmapscan", async function (req, res) {
  const scans = await NmapScan.find().populate({
    path: "scan_results",
    populate: {
      path: "open_ports",
    },
  });

  res.json({ scans });
});

app.get("/nmapscan/:id", async function (req, res) {
  try {
    console.log(req.params.id);
    const scan = await NmapScan.findById(req.params.id).populate({
      path: "scan_results",
      populate: {
        path: "open_ports",
      },
    });

    if (!scan) {
      return res.status(404).json({ message: "Scan not found" });
    }

    return res.json({ scan });
  } catch (err) {
    return res.status(401).json({ message: "error", err });
  }
});

app.listen(3001, async function () {
  await mongoose.connect("mongodb://127.0.0.1:27017/db");

  console.log("opened server");
});
