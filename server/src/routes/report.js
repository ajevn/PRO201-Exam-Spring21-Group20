const express = require("express");
const monk = require("monk");
const Joi = require("joi");

const router = express.Router();
const db = monk(process.env.MONGO_URI);
db.then(() => {
  console.log("connection success");
}).catch((e) => {
  console.error("Error !", e);
});

const report = db.get("report");

const schema = Joi.array().items(
  Joi.object({
    serialNumber: Joi.string().alphanum().required(),
    partName: Joi.string().alphanum().min(1).required(),
    createdAt: Joi.date().default(Date.now),
    location: Joi.string().required(),
    parts: Joi.array().items({
      partNumber: Joi.string().alphanum().min(1).required(),
      partName: Joi.string().alphanum().min(1).required(),
    }),
  })
);

router.post("/report", async (req, res) => {
  if (!req.user) return res.status(401).send();

  //body example
  /*[
	{
		"serialNumber": "12345",
		"partName": "SunBell",
    "location": "Oslo,Norway",
		"parts": [
			{
				"partNumber": "1",
				"partName": "PCB"
			}
		]
	}
]*/

  try {
    value = await schema.validateAsync(req.body);
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
