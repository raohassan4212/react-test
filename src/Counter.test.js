import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("is initial value is equal to zero", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const counterValue = Number(getByTestId("count").textContent);
    expect(counterValue).toEqual(0);
  });

  it("on increment click increas by 1", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const increamentBtn = getByRole("button", { name: "Increment" });
    const value1 = getByTestId("count").textContent;
    expect(value1).toEqual("0");
    fireEvent.click(increamentBtn);
    const value2 = getByTestId("count").textContent;
    expect(value2).toEqual("1");
  });
});
