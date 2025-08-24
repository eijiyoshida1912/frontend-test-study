import { render, screen } from "@testing-library/react";
import LoginMessage from "./LoginMessage";
import { expect, test } from "vitest";

test("ログインしているときの表示", () => {
  render(<LoginMessage loggedIn={true} />);
  expect(screen.getByText("ようこそ！")).toBeInTheDocument();
});

test("ログインしていないときの表示", () => {
  render(<LoginMessage loggedIn={false} />);
  expect(screen.getByText("ログインしてください")).toBeInTheDocument();
});
