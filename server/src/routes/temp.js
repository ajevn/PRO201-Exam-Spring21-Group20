const express = require("express");

const router = express.Router();

const db = require("../db/mongo");

const report = db.get("report");

router.get("/test", async (req, res) => {
  const data = require("../testDataReport")();
  await report.insert(data);
  res.status(204).send();
});

module.exports = router;
