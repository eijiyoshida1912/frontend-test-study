import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterList from "./FilterList";
import { expect, test } from "vitest";

test("入力した文字でリストが絞り込まれる", async () => {
  render(<FilterList />);
  const input = screen.getByLabelText("検索");

  // 初期状態: 全部見える
  expect(screen.getByText("Apple")).toBeInTheDocument();
  expect(screen.getByText("Banana")).toBeInTheDocument();

  // 入力後: "ap" にマッチするものだけ
  await userEvent.type(input, "ap");
  expect(screen.getByText("Apple")).toBeInTheDocument();
  expect(screen.getByText("Grape")).toBeInTheDocument();
  expect(screen.queryByText("Banana")).toBeNull();
});
