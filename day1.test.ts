import { assertEquals } from "jsr:@std/assert";
import { day1 } from "./day1.ts";

const textDecoder = new TextDecoder("utf-8");

Deno.test("example", async () => {
  const file = await Deno.readFile("./day1.example.txt");
  const contents = textDecoder.decode(file);
  const result = day1(contents);
  assertEquals(result, 11);
});

Deno.test("input", async () => {
  const file = await Deno.readFile("./day1.input.txt");
  const contents = textDecoder.decode(file);
  const result = day1(contents);
  assertEquals(result, 2000468);
});
