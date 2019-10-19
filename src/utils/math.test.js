import { sum } from "../../../jest-basic/math";
import { multi, fetchName, promiseEven } from "./math";

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("3 * 3 to  equal 9", () => {
  expect(multi(3, 3)).toBe(9);
});

test("name is Julia", done => {
  expect.assertions(1);
  const callback = data => {
    expect(data).toBe("Julia");
    done();
  };

  fetchName(callback);
});

test("2 is a eveb number", () => {
  expect.assertions(1);
  return promiseEven(2).then(data => expect(data).toMatch("is an even"));
});

test("3 is not an eveb number", () => {
  expect.assertions(1);
  return promiseEven(3).catch(data => expect(data).toMatch("is not an even"));
});

test("async: 2 is even", async () => {
  expect.assertions(1);
  const result = await promiseEven(2);
  expect(result).toMatch("is an even number");
});
