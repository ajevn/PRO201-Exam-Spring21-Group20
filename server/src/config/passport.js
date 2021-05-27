const LocalStrategy = require("passport-local").Strategy;
//Bcrypt - Hashing
const bcrypt = require("bcrypt");

const db = require("../db/mongo");
const users = db.get("users");

module.exports = function initialize(passport) {
  //Local login-strategy using bcrypt to decrypt passwords
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await users.findOne({ username: username });
      if (!user) {
        console.log("No user with that username");
        return done(null, false, { message: "Incorrect username/password." });
      }
      try {
        let passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          console.log("User " + user.username + " successfully logged in ");
          return done(null, user);
        } else {
          console.log("Unsuccessful authorization for user: " + user.username);
          return done(null, false, { message: "Incorrect username/password" });
        }
      } catch (e) {
        return done(e);
      }
    })
  );
  passport.serializeUser((user, done) =>
    done(null, { ...user, password: undefined })
  );
  passport.deserializeUser((id, done) => done(null, id));
};
