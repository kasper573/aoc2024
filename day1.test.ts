import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { day1 } from "./day1.ts";

const textDecoder = new TextDecoder("utf-8");

describe("part 1", () => {
  test("example", async () => {
    const file = await Deno.readFile("./day1.example.txt");
    const contents = textDecoder.decode(file);
    const result = day1(contents);
    assertEquals(result, 11);
  });

  test("input", async () => {
    const file = await Deno.readFile("./day1.input.txt");
    const contents = textDecoder.decode(file);
    const result = day1(contents);
    assertEquals(result, 2000468);
  });
});
