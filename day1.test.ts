import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { day1_lists, day1_sum } from "./day1.ts";

const textDecoder = new TextDecoder("utf-8");

describe("part 1: sum", () => {
  test("example", async () => {
    const lists = await readUTF8("./day1.example.txt").then(day1_lists);
    const sum = day1_sum(lists);
    assertEquals(sum, 11);
  });

  test("input", async () => {
    const lists = await readUTF8("./day1.input.txt").then(day1_lists);
    const result = day1_sum(lists);
    assertEquals(result, 2000468);
  });
});

async function readUTF8(filePath: string) {
  const file = await Deno.readFile(filePath);
  return textDecoder.decode(file);
}
