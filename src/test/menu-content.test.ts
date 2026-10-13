import { describe, expect, it } from "vitest";
import { menuCategories } from "@/lib/vao-config";

describe("VAO menu presentation", () => {
  it("provides a photograph and exactly 72 caption characters for every item", () => {
    for (const category of menuCategories) {
      for (const item of category.items) {
        expect(item.image, `${category.name}: ${item.name} photograph`).toBeTruthy();
        expect(item.description.length, `${category.name}: ${item.name} caption`).toBe(72);
        expect(item.description.trim()).toBe(item.description);
      }
    }
  });
});