const bcrypt = require("bcrypt");
const login = async (agent) => {
  const res = await agent
    .post("/api/login")
    .send({
      username: "test",
      password: "admin",
    })
    .set("Content-Type", "application/json");
  expect(res.statusCode).toEqual(200);
  return res;
};

const addAdmin = async (db) => {
  const user = db.get("users");
  const password = await bcrypt.hash("admin", 10);
  user.insert({
    username: "test",
    password: password,
    admin: true,
    campName: "Bright",
  });
};

module.exports = { login, addAdmin };
