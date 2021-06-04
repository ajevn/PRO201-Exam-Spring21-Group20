const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const router = express.Router();

const db = require("../db/mongo");

const users = db.get("users");

//Local login route -- Authenticates with passport and bcrypt for password hashing/unh
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) return res.status(401).send({ messages: info });

    req.logIn(user, (err) => {
      if (err) return next(err);

      //Sending necessary data to frontend -- Extracting necessary info from req.user to avoid sending whole user object which includes password
      let userInfo = {
        ...req.user,
        password: undefined,
      };
      res.status(200).json(userInfo);
    });
  })(req, res);
});

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")).required(),
  admin: Joi.boolean().default(false),
  campName: Joi.string().alphanum().required(),
});
//Registration route -- Saves user in user storage after hashing password. -- Error handling and a bit of input validation/sanitation is done in frontend.
router.post("/register", async (req, res, next) => {
  if (!req.user || !req.user.admin) {
    console.log("register not authenticated");
    return next();
  }
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  let value;
  try {
    value = await registerSchema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
  const username = await users.findOne({ username: value.username });
  if (!username)
    try {
      await users.insert({
        ...value,
        password: hashedPassword,
      });
      return res.sendStatus(201);
    } catch (e) {
      return res.status(500).send(e);
    }
  return res.status(409).json({ messages: "Username already exists" });
});

const editSchema = Joi.object({
  oldPassword: Joi.string().min(3).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")).required(),
});
router.patch("/edit", async (req, res) => {
  if (!req.user) return res.status(401).send();
  try {
    const value = await editSchema.validateAsync(req.body);
    const username = await users.findOne({ _id: req.user._id });
    let passwordMatch = await bcrypt.compare(
      value.oldPassword,
      username.password
    );
    if (!passwordMatch)
      return res.status(400).json({ error: "incorrect password" });
    const hashedPassword = await bcrypt.hash(value.password, 10);
    await users.findOneAndUpdate(
      { _id: username._id },
      { $set: { password: hashedPassword } }
    );
    res.status(200).send();
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

//Invoking logout() will remove the req.user property and clear the login session (if any).
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send();
});

router.get("/user", (req, res) => {
  if (!req.user) return res.status(401).send();
  res.status(200).json(req.user);
});

router.get("/admin", async (req, res) => {
  if (!req.user) return res.status(401).send();
  res.status(200).json({ admin: req.user.admin });
});

module.exports = router;
