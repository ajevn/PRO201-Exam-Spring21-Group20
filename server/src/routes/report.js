const express = require("express");
const Joi = require("joi");

const router = express.Router();
const db = require("../db/mongo");

const report = db.get("report");

const schema = Joi.array().items(
  Joi.object({
    serialNumber: Joi.string().alphanum().default(""),
    productName: Joi.string().alphanum().min(1).required(),
    createdAt: Joi.date().default(new Date()),
    campName: Joi.string().alphanum(),
    parts: Joi.array()
      .items({
        partNumber: Joi.string().alphanum().min(1).required(),
        partName: Joi.string().min(1).required(),
      })
      .min(1)
      .max(9)
      .required(),
  })
);
router.get("/", async (req, res) => {
  if (!req.user) return res.status(401).send();
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
    let value = await schema.validateAsync(req.body);
    console.log(JSON.stringify(value));
    const data = value.map((x) => {
      return { ...x, username: req.user.username, campName: req.user.campName };
    });
    try {
      await report.insert(data);
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send({ error: e });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

module.exports = router;
