const request = require("supertest");
const app = require("../../src/app");
const db = require("../../src/db/mongo");
const { login, addAdmin } = require("./helperFunction");

beforeEach(async () => {
  await addAdmin(db);
});

describe("test camp endpoint", () => {
  it("should list all camps", async () => {
    const agent = request.agent(app, null);
    const res = await agent.get("/api/camp");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(4);
  });

  it("should list a specific camp", async () => {
    const agent = request.agent(app, null);
    const res = await agent.get("/api/camp");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(4);

    const res1 = await agent.get("/api/camp/Katumba");
    expect(res1.statusCode).toEqual(200);
    expect(res1.body.name).toEqual("Katumba");
  });

  it("should fail to add a camp", async () => {
    const agent = request.agent(app, null);
    const res = await agent.post("/api/camp");
    expect(res.statusCode).toEqual(401);
  });

  it("should fail on schema to add a camp", async () => {
    const agent = request.agent(app, null);
    await login(agent);

    const res = await agent
      .post("/api/camp")
      .send({})
      .set("Content-Type", "application/json");
    expect(res.statusCode).toEqual(400);
  });

  it("should succeed to add a camp", async () => {
    const agent = request.agent(app, null);
    await login(agent);

    const res = await agent
      .post("/api/camp")
      .send({
        name: "oslo",
        type: "something",
        coordinates: [1.222333, 13.12312],
      })
      .set("Content-Type", "application/json");
    expect(res.statusCode).toEqual(200);
  });
  it("should fail to add a camp with same name", async () => {
    const agent = request.agent(app, null);
    await login(agent);

    const res = await agent
      .post("/api/camp")
      .send({
        name: "oslo1",
        type: "something",
        coordinates: [1.222333, 13.12312],
      })
      .set("Content-Type", "application/json");
    expect(res.statusCode).toEqual(200);

    const res2 = await agent
      .post("/api/camp")
      .send({
        name: "oslo1",
        type: "something",
        coordinates: [1.222333, 13.12312],
      })
      .set("Content-Type", "application/json");
    expect(res2.statusCode).toEqual(400);
  });
});
