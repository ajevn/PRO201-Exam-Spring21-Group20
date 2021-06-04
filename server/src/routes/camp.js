const express = require("express");
const router = express.Router();
const Joi = require("joi");

const db = require("../db/mongo");

const camp = db.get("camp");

const schema = Joi.object({
  name: Joi.string().required(),
  Country: Joi.string().required(),
  coordinates: Joi.array().items(Joi.number()).length(2).required(),
});

router.get("/", async (req, res) => {
  // get all camps
  let camps = await camp.find({});
  if (camps.length === 0) {
    await camp.insert([
      {
        name: "Pugnido",
        Country: "ethiopia",

        coordinates: [7.681051391626661, 34.00543212890625],
      },
      {
        name: "Katumba",
        Country: "Tanzania",

        coordinates: [-6.287998672327658, 31.02813720703125],
      },
      {
        name: "Hagadera",
        Country: "Kenya",
        coordinates: [0.17028783523693297, 40.5230712890625],
      },
      {
        name: "Yida",
        Country: "South Sudan",
        coordinates: [10.244654445228324, 30.047607421875],
      },
    ]);
    camps = await camp.find({});
  }

  res.json(camps);
});
router.get("/:name", async (req, res) => {
  // get one camp
  const { name } = req.params;
  const camps = await camp.findOne({ name: name });
  res.json(camps ? camps : {});
});

router.post("/", async (req, res) => {
  // create one camp

  /*
  {
	  "name":"oslo",
	  "land":"Norway",
	  "coordinates":[
		  1.222333,
		  13.12312
	  ]
  }
 */
  if (!req.user || !req.user.admin) return res.status(401).send();

  try {
    const value = await schema.validateAsync(req.body);
    const camps = await camp.findOne({ name: value.name });

    if (camps)
      return res.status(400).json({ error: "already a camp with that name" });
    try {
      await camp.insert(value);
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send({ error: e });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

module.exports = router;
