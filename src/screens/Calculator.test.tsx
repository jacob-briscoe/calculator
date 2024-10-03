import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Calculator } from "./Calculator";
import { AppThemeProvider } from "../providers";
import { DataTestID } from "../helpers";

describe("Calculator", () => {
  function renderCalculator() {
    return render(
      <AppThemeProvider>
        <Calculator />
      </AppThemeProvider>,
    );
  }

  async function calculate(keys: string[]) {
    const user = userEvent.setup();

    for (const key of keys) {
      const keyElement = screen.getByRole("button", { name: key });
      await user.click(keyElement);
    }
  }

  beforeEach(() => {
    renderCalculator();
  });

  function expectCalculatorDisplay(output: string) {
    const display = screen.getByTestId(DataTestID.Display);
    expect(display).toBeInTheDocument();
    expect(display).toHaveTextContent(output);
  }

  it("renders the Calculator component", () => {
    expectCalculatorDisplay("0");
  });

  it("can perform basic addition", async () => {
    const keys = ["1", "+", "2", "="];
    await calculate(keys);
    expectCalculatorDisplay("3");
  });

  it("can perform basic subtraction", async () => {
    const keys = ["2", "-", "1", "="];
    await calculate(keys);
    expectCalculatorDisplay("1");
  });

  it("can perform basic multiplication", async () => {
    const keys = ["2", "x", "2", "="];
    await calculate(keys);
    expectCalculatorDisplay("4");
  });

  it("can perform basic division", async () => {
    const keys = ["2", "/", "2", "="];
    await calculate(keys);
    expectCalculatorDisplay("1");
  });

  it("can delete the previously entered number", async () => {
    const keys = ["2", "/", "2", "del", "1", "="];
    await calculate(keys);
    expectCalculatorDisplay("2");
  });

  it("can reset", async () => {
    const keys = ["2", "/", "2", "=", "reset"];
    await calculate(keys);
    expectCalculatorDisplay("0");
  });

  it("cannot enter invalid expressions", async () => {
    const keys = ["2", "+", "+"];
    await calculate(keys);
    expectCalculatorDisplay("2");
  });
});
