const { test, before, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const request = require("supertest");

const testStorage = path.join(
  os.tmpdir(),
  `realm-contact-test-${process.pid}-${Date.now()}.json`
);

process.env.NODE_ENV = "test";
process.env.CONTACT_MESSAGES_FILE = testStorage;

const app = require("../server");

before(() => {
  fs.writeFileSync(testStorage, "[]", "utf8");
});

after(() => {
  if (fs.existsSync(testStorage)) {
    fs.unlinkSync(testStorage);
  }
});

test("GET /api/health returns a successful health response", async () => {
  const response = await request(app).get("/api/health");

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
});

test("contact endpoint rejects missing fields", async () => {
  const response = await request(app)
    .post("/api/contact")
    .send({ name: "Test User" });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});

test("contact endpoint rejects an invalid email", async () => {
  const response = await request(app)
    .post("/api/contact")
    .send({
      name: "Test User",
      email: "not-an-email",
      service: "Web",
      message: "A test message",
    });

  assert.equal(response.status, 400);
});

test("contact endpoint rejects an unsupported service", async () => {
  const response = await request(app)
    .post("/api/contact")
    .send({
      name: "Test User",
      email: "test@example.com",
      service: "Unsupported",
      message: "A test message",
    });

  assert.equal(response.status, 400);
});

test("valid contact message is saved only to isolated test storage", async () => {
  const response = await request(app)
    .post("/api/contact")
    .send({
      name: "Realm Test",
      email: "test@example.com",
      service: "Web",
      message: "Automated test message",
    });

  assert.equal(response.status, 201);
  assert.equal(response.body.success, true);

  const savedMessages = JSON.parse(fs.readFileSync(testStorage, "utf8"));
  assert.equal(savedMessages.length, 1);
  assert.equal(savedMessages[0].name, "Realm Test");
  assert.equal(savedMessages[0].service, "Web");
  assert.ok(savedMessages[0].id);
  assert.ok(savedMessages[0].createdAt);
});

test("contact endpoint rejects malformed JSON", async () => {
  const response = await request(app)
    .post("/api/contact")
    .set("Content-Type", "application/json")
    .send('{"name":');

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});
