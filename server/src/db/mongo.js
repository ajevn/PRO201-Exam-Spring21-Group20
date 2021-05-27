const monk = require("monk");
const bcrypt = require("bcrypt");

const db = monk(process.env.MONGO_URL);
db.then(async () => {
  console.log("connection success");
  await addAdmin();
}).catch((e) => {
  console.error("Error with monk");
});

const addAdmin = async () => {
  const user = db.get("users");
  console.log("test");
  if (await user.find({})) {
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
