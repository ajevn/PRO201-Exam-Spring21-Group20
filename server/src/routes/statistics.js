const express = require("express");
const router = express.Router();

const db = require("../db/mongo");

const {
  getPartCountByPartName,
} = require("../controllers/PartStatisticsController");

const report = db.get("report");

router.get("/partCount", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const count = await getPartCountByPartName("Socket charger");
  res.json({ totalRepairs: count });
});

router.get("/totalRepairs", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();

  const count = await report.count({});
  res.json({ totalRepairs: count });
});

module.exports = router;
