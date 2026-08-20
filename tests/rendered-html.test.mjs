import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function worker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

async function render(path) {
  const app = await worker();
  return app.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the autonomous hotel concept home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Central Hotel Concept/);
  assert.match(html, /Номерной фонд/);
  assert.match(html, /Demo booking/);
  assert.match(html, /portfolio project/i);
  assert.doesNotMatch(html, /hotel79\.ru/);
});

test("renders direct room and booking routes", async () => {
  for (const path of ["/booking", "/rooms/standard", "/rooms/comfort", "/rooms/suite"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), /Demo booking|Номер уже/);
  }
});

test("keeps the portfolio content centralized and free of old booking links", async () => {
  const [rooms, page, hero, footer] = await Promise.all([
    readFile(new URL("../data/rooms.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/hero/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/footer/Footer.tsx", import.meta.url), "utf8"),
  ]);
  assert.equal((rooms.match(/slug: "(?:standard|comfort|suite)"/g) ?? []).length, 3);
  assert.match(page, /Booking/);
  assert.match(page, /Gallery/);
  assert.match(page, /Reviews/);
  assert.doesNotMatch(`${hero}${footer}`, /hotel79\.ru/);
});
