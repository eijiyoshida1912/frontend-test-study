import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import NameForm from "./NameForm";

test("入力した名前が画面に表示される", async () => {
  render(<NameForm />);
  const input = screen.getByLabelText("名前");
  await userEvent.type(input, "栄治");
  expect(screen.getByText("こんにちは、栄治！")).toBeInTheDocument();
});
