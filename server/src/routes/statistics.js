const express = require("express");
const router = express.Router();
const {
  getPartCountByPartName,
  getPartCountByPartNumber,
  getPartsByPartName,
  getPartsByPartNumber,
  getRepairsCountByMonth,
  getPartCountByMonth,
  getPartsCountArray,
} = require("../controllers/PartStatisticsController");
const db = require("../db/mongo");

const report = db.get("report");

router.get("/partCount/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await getPartCountByPartName(name);
  res.json(data);
});
router.get("/partCountId/:id", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { id } = req.params;
  const data = await getPartCountByPartNumber(id);
  res.json(data);
});
router.get("/parts/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await getPartsByPartName(name);
  res.json(data);
});

router.get("/partsId/:id", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { id } = req.params;
  const data = await getPartsByPartNumber(id);
  res.json(data);
});

router.get("/totalRepairs", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const count = await report.count({});
  res.json({ totalRepairs: count });
});

router.get("/totalRepairs", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const count = await getPartsCountArray();
  res.json({ totalRepairs: count });
});

router.get("/totalParts", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const count = await report.count({});
  res.json({ totalRepairs: count });
});

router.get("/partCount-by-month", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const data = await getRepairsCountByMonth();
  res.json(data);
});
router.get("/parts-by-month", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();

  const data = await getPartCountByMonth();
  res.json(data);
});

module.exports = router;
