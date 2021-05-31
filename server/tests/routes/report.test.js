const request = require("supertest");
const app = require("../../src/app");
const db = require("../../src/db/mongo");
const { login, addAdmin } = require("./helperFunction");

beforeEach(async () => {
  await addAdmin(db);
});

describe("test report endpoint", () => {
  it("should fail to add a report", async () => {
    const agent = request.agent(app, null);

    const res = await agent.get("/api/report");
    expect(res.statusCode).toEqual(401);

    const res2 = await agent.post("/api/report");
    expect(res2.statusCode).toEqual(401);
  });

  it("should all reports", async () => {
    const agent = request.agent(app, null);

    await login(agent);

    const res1 = await agent.get("/api/report");
    expect(res1.statusCode).toEqual(200);
    expect(res1.body).toEqual([]);
  });

  it("should fail to add report schema", async () => {
    const agent = request.agent(app, null);

    await login(agent);

    const res1 = await agent
      .post("/api/report")
      .send({})
      .set("Content-Type", "application/json");
    expect(res1.statusCode).toEqual(400);
  });

  it("should succeed to add report", async () => {
    const agent = request.agent(app, null);

    await login(agent);

    const res1 = await agent
      .post("/api/report")
      .send([
        {
          serialNumber: "12345",
          productName: "SunBell",
          campName: "Oslo",
          parts: [
            {
              partNumber: "1",
              partName: "PCB",
            },
          ],
        },
      ])
      .set("Content-Type", "application/json");
    expect(res1.statusCode).toEqual(200);

    const res2 = await agent.get("/api/report");
    expect(res2.statusCode).toEqual(200);
    expect(res2.body.length).toEqual(1);
  });
});
