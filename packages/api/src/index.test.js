import { it, expect } from "vitest";
import { makeUrl } from "./index.js";
it("builds url using workspace package", () => expect(makeUrl("My Post")).toBe("/posts/my-post"));
