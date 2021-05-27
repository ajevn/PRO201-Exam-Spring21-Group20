const express = require("express");

const router = express.Router();

const db = require("../db/mongo");

const user = db.get("users");
const report = db.get("report");

router.get("/user", async (req, res) => {
  // if (!req.user) return res.status(401).send();
  const items = await user.find({});
  res.json(items);
});

router.post("/user", async (req, res) => {
  const data = req.body;
  user.insert(data);
  res.status(204).send();
});

router.post("/reports/test", async (req, res) => {
  const data = require("../testDataReport")();
  await report.insert(data);
  res.status(204).send();
});

module.exports = router;
