const express = require("express");
const router = express.Router();
const db = require("../db/mongo");
const report = db.get("report");

router.get("/parts/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await report.find({});
  res.json(data);
});

router.get("/partCount/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await report.count({ "parts.partName": name });
  res.json(data);
});

router.get("/partCountId/:id", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { id } = req.params;
  const data = await report.count({ "parts.partNumber": id });
  res.json(data);
});

router.get("/parts/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await report.find({ "parts.partName": name });
  res.json(data);
});

router.get("/partsId/:id", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { id } = req.params;
  const data = await report.find({ "parts.partNumber": id });
  res.json(data);
});

module.exports = router;
