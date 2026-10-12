import { describe, it, expect } from "vitest";
import { slugify, sum } from "./index.js";
describe("utils", () => {
  it("slugifies", () => expect(slugify(" Hello World! ")).toBe("hello-world"));
  it("sums", () => expect(sum(1, 2, 3)).toBe(6));
});
