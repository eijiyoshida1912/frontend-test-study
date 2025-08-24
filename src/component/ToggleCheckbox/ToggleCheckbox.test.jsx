import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleCheckbox from "./ToggleCheckbox";
import { expect, test } from "vitest";

test("チェックON/OFFでメッセージが切り替わる", async () => {
  render(<ToggleCheckbox />);
  const checkbox = screen.getByRole("checkbox");

  expect(screen.getByText("未同意です")).toBeInTheDocument();

  await userEvent.click(checkbox);
  expect(screen.getByText("同意しました")).toBeInTheDocument();

  await userEvent.click(checkbox);
  expect(screen.getByText("未同意です")).toBeInTheDocument();
});
