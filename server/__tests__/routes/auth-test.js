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
    campName: "Bright"
  });
});
afterAll(async () => {
  await db.close();
});

const login = async agent => {
  return await agent
    .post("/api/login")
    .send({
      username: "test",
      password: "admin"
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
        password: "password1"
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
        campName: "Bright"
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
        campName: "Bright"
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
        campName: "test"
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
        campName: "test"
      })
      .set("Content-Type", "application/json");
    expect(res2.statusCode).toEqual(201);
  });
});

describe("test all get endpoints", () => {
  it("should fail to get user info", async () => {
    const agent = request.agent(app, null);
    const res1 = await agent.get("/api/user");
    expect(res1.statusCode).toEqual(401);
  });

  it("should succeed to get user info", async () => {
    const agent = request.agent(app, null);
    const res1 = await login(agent);
    expect(res1.statusCode).toEqual(200);

    const res2 = await agent.get("/api/user");
    expect(res2.statusCode).toEqual(200);
  });

  it("should return 200 and logout if you are", async () => {
    const agent = request.agent(app, null);
    const res = await agent.get("/api/logout");
    expect(res.statusCode).toEqual(200);

    const res1 = await agent.get("/api/user");
    expect(res1.statusCode).toEqual(401);

    const res2 = await login(agent);
    expect(res2.statusCode).toEqual(200);

    const res3 = await agent.get("/api/user");
    expect(res3.statusCode).toEqual(200);

    const res4 = await agent.get("/api/logout");
    expect(res4.statusCode).toEqual(200);

    const res5 = await agent.get("/api/user");
    expect(res5.statusCode).toEqual(401);
  });
  it("should fail to se if admin", async () => {
    const agent = request.agent(app, null);
    const res = await agent.get("/api/admin");
    expect(res.statusCode).toEqual(401);
  });

  it("should succeed to se if admin", async () => {
    const agent = request.agent(app, null);
    const res1 = await login(agent);
    expect(res1.statusCode).toEqual(200);

    const res2 = await agent.get("/api/admin");
    expect(res2.statusCode).toEqual(200);
    expect(res2.body).toEqual({ admin:true})
  });
});
describe("test edit password",()=>{
  it("should fail to edit password, not logged in", async ()=> {
    const agent = request.agent(app, null);
    const res1 = await agent.patch("/api/edit") .send({
      oldPassword: "test",
      password: "admin"
    })
      .set("Content-Type", "application/json");
    expect(res1.statusCode).toEqual(401);
  });
  it("should fail to because of too short password", async ()=> {
    const agent = request.agent(app, null);
    const res = await login(agent);
    expect(res.statusCode).toEqual(200);

    const res1 = await agent.patch("/api/edit") .send({
      oldPassword: "test",
      password: "ad"
    })
      .set("Content-Type", "application/json");
    expect(res1.statusCode).toEqual(400);
  });

  it("should fail to not right old password", async ()=> {
    const agent = request.agent(app, null);
    const res = await login(agent);
    expect(res.statusCode).toEqual(200);

    const res1 = await agent.patch("/api/edit") .send({
      oldPassword: "test",
      password: "adminwww"
    })
      .set("Content-Type", "application/json");
    expect(res1.statusCode).toEqual(400);
    expect(res1.body).toEqual({ error: "incorrect password" });
  });

  it("should succeed to edit password", async ()=> {
    const agent = request.agent(app, null);
    const res = await login(agent);
    expect(res.statusCode).toEqual(200);
    const newPassword = "admin123"
    const res1 = await agent.patch("/api/edit") .send({
      oldPassword: "admin",
      password: newPassword
    })
      .set("Content-Type", "application/json");
    expect(res1.statusCode).toEqual(200);
    const user = db.get("users");
    const data =await user.findOne({username:"test"})
    expect(bcrypt.compareSync(newPassword,data.password)).toEqual(true)
  });


})
