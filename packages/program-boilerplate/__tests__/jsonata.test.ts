import jsonata from "jsonata";
import { timeboxExpression, safeJsonata } from "../src/jsonata";

describe("#timeboxExpression", () => {
  const infExpr = jsonata("( $inf := function(){$inf()}; $inf())");

  test("infinite loops throw error", () => {
    timeboxExpression(infExpr);

    let error: any;
    expect(() => {
      try {
        infExpr.evaluate(undefined);
      } catch (e) {
        error = e;
        throw e;
      }
    }).toThrowError();
    expect(error!.code === "U1001" || error!.code === "U1002").toBe(true);
  }, 7000);
});

describe("#safeJsonata", () => {
  const infExpr = "( $inf := function(){$inf()}; $inf())";

  const expr = "( event.key = 'purchase' ? 111 )";
  const input = { event: { key: "purchase" } };
  test("infinite loops do not throw, but still exit", () => {
    expect(() => {
      safeJsonata(infExpr, undefined);
    }).not.toThrowError();
  }, 7000);

  test("jsonata is evaluated as normal", () => {
    expect(safeJsonata(expr, input)).toBe(111);
  });
});
