const request = require("supertest");
const app = require("../../src/app");
const db = require("../../src/db/mongo");
const bcrypt = require("bcrypt");

beforeEach(async () => {
  const user = db.get("users");
  const password = await bcrypt.hash("admin", 10);
  user.insert({
    username: "test",
    password: password,
    admin: true,
    campName: "Bright",
  });
});
afterAll(async () => {
  await db.close();
});

const login = async (agent) => {
  return await agent
    .post("/api/login")
    .send({
      username: "test",
      password: "admin",
    })
    .set("Content-Type", "application/json");
};

describe("test login and register endpoint", () => {
  it("should fail to login", async () => {
    const agent = request.agent(app, null);
    const res = await agent
      .post("/api/login")
      .send({
        username: "test2",
        password: "password1",
      })
      .set("Content-Type", "application/json");
    expect(res.statusCode).toEqual(401);
  });

  it("should succeed to login", async () => {
    const agent = request.agent(app, null);
    const res = await login(agent);
    expect(res.statusCode).toEqual(200);
  });

  it("should fail to create a user", async () => {
    const agent = request.agent(app, null);
    const res = await agent
      .post("/api/register")
      .send({
        username: "test",
        password: "admin",
        campName: "Bright",
      })
      .set("Content-Type", "application/json");
    expect(res.statusCode).toEqual(404);
  });

  it("should fail on schema to create a user", async () => {
    const agent = request.agent(app, null);
    const res1 = await login(agent);
    expect(res1.statusCode).toEqual(200);
    const res2 = await agent
      .post("/api/register")
      .send({
        username: "test",
        password: "admin",
        something: "waw",
        campName: "Bright",
      })
      .set("Content-Type", "application/json");
    expect(res2.statusCode).toEqual(400);
  });

  it("should fail to create a user, because it already exists", async () => {
    const agent = request.agent(app, null);
    const res1 = await login(agent);
    expect(res1.statusCode).toEqual(200);
    const res2 = await agent
      .post("/api/register")
      .send({
        username: "test",
        password: "admin123",
        campName: "test",
      })
      .set("Content-Type", "application/json");
    expect(res2.statusCode).toEqual(409);
  });

  it("should succeed to create a user", async () => {
    const agent = request.agent(app, null);
    const res1 = await login(agent);
    expect(res1.statusCode).toEqual(200);
    const res2 = await agent
      .post("/api/register")
      .send({
        username: "test2",
        password: "admin123",
        campName: "test",
      })
      .set("Content-Type", "application/json");
    expect(res2.statusCode).toEqual(201);
  });
});
