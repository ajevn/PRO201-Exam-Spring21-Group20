const express = require("express");

const router = express.Router();

const db = require("../db/mongo");
const {
  getRepairsCountByMonth,
  getPartsCountArray,
} = require("../controllers/PartStatisticsController");

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

router.get("/test", async (req, res) => {
  const data = await getRepairsCountByMonth();
  res.status(200).json(data);
});
router.get("/test1", async (req, res) => {
  const data = await report.find({});
  res.status(200).json(data);
});

router.get("/testdb", async (req, res) => {
  const data = await getPartsCountArray();
  res.status(200).json(data);
});

module.exports = router;
