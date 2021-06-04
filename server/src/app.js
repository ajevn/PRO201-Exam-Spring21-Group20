const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const helmet = require("helmet");
const cors = require("cors");
const rateSpeedLimiter = require("express-slow-down");
const MongoStore = require("connect-mongo");

const app = express();

//Passport
const passport = require("passport");
const initializePassport = require("./config/passport");

const sessionParser = session({
  name: "bright.sid",
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
  // store: MongoStore.create({
  //   mongoUrl: process.env.MONGO_URL,
  //   dbName: "bright",
  //   crypto: {
  //     secret: process.env.MONGO_SECRET || "squirrel",
  //   },
  // }),
});

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionParser.cookie.secure = true; // serve secure cookies
}

const rateSpeedLimit = rateSpeedLimiter({
  delayAfter: 50, // slow down limit (in reqs)
  windowMs: 1 * 60 * 1000, // time where limit applies
  delayMs: 2500, // slow down time
});

//use middleware
app.use(bodyParser.json());
app.use(sessionParser);
app.use(helmet());
app.use(rateSpeedLimit);
app.use(
  cors({
    origin: ["http://localhost:8080", "http://example2.com"],
    credentials: true,
  })
);
//Passport initialization
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api", require("./routes/auth"));
app.use("/api/report", require("./routes/report"));
app.use("/api/", require("./routes/parts"));
app.use("/api/camp", require("./routes/camp"));
app.use("/api/test", require("./routes/temp"));
app.use("/api/statistics", require("./routes/statistics"));

//Capture All 404 errors
app.use((req, res) => {
  res.status(404).send({ message: "404 not found" });
});

module.exports = app;
