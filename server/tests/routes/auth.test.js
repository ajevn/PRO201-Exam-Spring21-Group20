const request = require("supertest");
const users = require("../../src/data/users");
const app = require("../../src/app");

beforeEach(() => {
  users.resetAllUsers();
});

let userInfo = {
  username: "username",
  firstName: "firstName",
  lastName: "lastname",
  email: "email",
};

test("Test fail when try to log in when not registered ", async () => {
  const response = await request(app)
    .post("/login/local")
    .send(userInfo)
    .set("Content-Type", "application/json");

  expect(response.statusCode).toBe(401);
});
