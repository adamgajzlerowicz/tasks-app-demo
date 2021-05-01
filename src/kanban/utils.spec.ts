import { makeBoardOption } from "./utils";

describe("makeBoardOption", () => {
  it("maps options correctly", () => {
    expect(makeBoardOption({ title: "RnB", num_tasks: 4 }))
      .toMatchInlineSnapshot(`
      Object {
        "label": "RnB (4 tasks)",
        "value": "RnB",
      }
    `);
  });
});
