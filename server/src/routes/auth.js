const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const monk = require("monk");
const Joi = require("joi");

const router = express.Router();

const db = monk(process.env.MONGO_URI);
db.then(() => {
  console.log("connection success");
}).catch((e) => {
  console.error("Error !", e);
});
const users = db.get("users");

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
  admin: Joi.boolean().default(false),
});

//Local login route -- Authenticates with passport and bcrypt for password hashing/unh
router.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) return next(err);

    if (!user) return res.status(401).send({ messages: info });

    req.logIn(user, function (err) {
      if (err) return next(err);

      //Sending necessary data to frontend -- Extracting necessary info from req.user to avoid sending whole user object which includes password
      let userInfo = {
        ...req.user,
        password: undefined,
      };
      res.status(200).send(userInfo);
    });
  })(req, res);
});

//Registration route -- Saves user in user storage after hashing password. -- Error handling and a bit of input validation/sanitation is done in frontend.
router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  let value;
  try {
    value = await schema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
  const username = await users.findOne({ username: value.username });
  if (!username)
    try {
      const user = {
        ...value,
        password: hashedPassword,
      };
      await users.insert(user);

      return res.sendStatus(200);
    } catch (e) {
      return res.status(500).send(e);
    }
  return res.status(409).json({ messages: "Username already exists" });
});
//Invoking logout() will remove the req.user property and clear the login session (if any).
router.get("/logout", (req, res) => {
  req.logout();
  //TODO Update redirect route
  res.status(200).send();
});

router.get("/admin", async (req, res) => {
  if (!req.user) return res.status(401).send();
  res.status(200).json({ admin: req.user.admin });
});

module.exports = router;
