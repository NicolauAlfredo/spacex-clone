import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routerSource = await readFile(new URL("../src/router/index.tsx", import.meta.url), "utf8");

for (const route of ["/", "/moon", "/starlink", "/shop-x", "/cart", "/product/:productId", "*"]) {
  test(`router declares ${route}`, () => {
    assert.ok(routerSource.includes(`path: "${route}"`));
  });
}
