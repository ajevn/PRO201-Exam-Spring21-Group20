const express = require("express");
const router = express.Router();

const db = require("../db/mongo");
const reports = db.get("report");

const getPartCount = async (param) => {
  return reports.count({ parts: [{ partName: "Lamp" }] });
  {
    parts: [{ partNumber: "7" }];
  }
};

module.exports = { getPartCount };
