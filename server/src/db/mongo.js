const monk = require("monk");
const bcrypt = require("bcrypt");

const db = monk(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.then(async () => {
  console.log("connection success");
  await addAdmin();
}).catch(() => {
  console.error("Error with monk");
});

const addAdmin = async () => {
  const user = db.get("users");
  const data = await user.find({});
  console.log(data.length);
  if (data.length === 0) {
    const password = await bcrypt.hash("admin", 10);
    user.insert({
      username: "bright",
      password: password,
      admin: true,
      campName: "Bright",
    });
  }
};

module.exports = db;
