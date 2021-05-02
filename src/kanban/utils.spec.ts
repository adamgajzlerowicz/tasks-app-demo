import {makeBoardOption, isLastLane, canMoveLeft, getPreviousLane, canMoveRight, getNextLane} from "./utils";

describe("makeBoardOption", () => {
  it("maps options correctly", () => {
    expect(makeBoardOption({ title: "RnB", num_tasks: 4, id: "hello" }))
        .toMatchInlineSnapshot(`
      Object {
        "label": "RnB (4 tasks)",
        "value": "hello",
      }
    `);
  });
});

describe("isLastLane", () => {
  it("detects last lane", () => {
    expect(isLastLane("completed")).toBe(true);
  });
  it("detects not last lane", () => {
    expect(isLastLane("codeReview")).toBe(false);
  });
});

describe("canMoveLeft", () => {
  it("can move left for non first", () => {
    expect(canMoveLeft("completed")).toBe(true);
  });
  it("can move left not for first lane", () => {
    expect(canMoveLeft("candidates")).toBe(false);
  });
});

describe("getPreviousLane", () => {
  it("finds previous lane correctly", () => {
    expect(getPreviousLane("completed")).toBe('codeReview');
  });
});

describe("canMoveRight", () => {
  it("can move right for non last", () => {
    expect(canMoveRight("candidates")).toBe(true);
  });
  it("can move right not for last lane", () => {
    expect(canMoveRight("completed")).toBe(false);
  });
});

describe("getNextLane", () => {
  it("finds previous lane correctly", () => {
    expect(getNextLane("inProgress")).toBe('codeReview');
  });
});
