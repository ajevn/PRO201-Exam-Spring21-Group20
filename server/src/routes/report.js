const express = require("express");
const Joi = require("joi");

const router = express.Router();
const db = require("../db/mongo");

const report = db.get("report");

const schema = Joi.array().items(
  Joi.object({
    serialNumber: Joi.string().alphanum().required(),
    productName: Joi.string().alphanum().min(1).required(),
    createdAt: Joi.date().default(Date.now),
    campName: Joi.string().alphanum().required(),
    parts: Joi.array()
      .items({
        partNumber: Joi.string().alphanum().min(1).required(),
        partName: Joi.string().alphanum().min(1).required(),
      })
      .min(1)
      .max(9)
      .required(),
  })
);
router.get("/", async (req, res) => {
  const data = await report.find({});
  res.json(data);
});

router.post("/", async (req, res) => {
  if (!req.user) return res.status(401).send();

  //body example
  /*[
	{
		"serialNumber": "12345",
		"productName": "SunBell",
    "campName": "Oslo",
		"parts": [
			{
				"partNumber": "1",
				"partName": "PCB"
			}
		]
	}
]*/

  try {
    const value = await schema.validateAsync(req.body);
    const data = value.map((x) => {
      return { ...x, username: req.user.username };
    });
    try {
      await report.insert(data);
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send({ error: e });
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
