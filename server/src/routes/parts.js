const express = require("express");
const router = express.Router();
const db = require("../db/mongo");
const report = db.get("report");

router.get("/parts", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const data = await report.find({});
  res.json(data);
});

module.exports = router;
