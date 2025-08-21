import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HelloButton from "./HelloButton";
import { expect, test } from "vitest";

test("ボタンを押すとメッセージが変わる", async () => {
  render(<HelloButton />);
  expect(screen.getByText("こんにちは！")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "押してね" }));
  expect(screen.getByText("こんばんは！")).toBeInTheDocument();
});
