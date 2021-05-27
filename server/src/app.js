const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const helmet = require("helmet");
const cors = require("cors");
const rateSpeedLimiter = require("express-slow-down");

const app = express();
app.set("trust proxy", 1);

//Passport
const passport = require("passport");
const initializePassport = require("./config/passport");

const sessionParser = session({
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
});

const rateSpeedLimit = rateSpeedLimiter({
  delayAfter: 50, // slow down limit (in reqs)
  windowMs: 1 * 60 * 1000, // time where limit applies
  delayMs: 2500, // slow down time
});

const whitelist = ["http://localhost:8080", "http://example2.com"];
const corsOptionsDelegate = function (req, callback) {
  const corsOptions =
    whitelist.indexOf(req.header("Origin")) !== -1
      ? { origin: true }
      : { origin: false };
  callback(null, corsOptions);
};

//use middleware
app.use(bodyParser.json());
app.use(sessionParser);
app.use(helmet());
app.use(rateSpeedLimit);
app.use(cors(corsOptionsDelegate));
//Passport initialization
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api", require("./routes/auth"));
app.use("/api/report", require("./routes/report"));
app.use("/api/camp", require("./routes/camp"));
app.use("/api/test", require("./routes/test"));
app.use("/api/statistics", require("./routes/statistics"));

app.get("/", (req, res) => {
  res.json({ name: "test" });
});

//Capture All 404 errors
app.use((req, res) => {
  res.status(404).send({ message: "404 not found" });
});

module.exports = app;
