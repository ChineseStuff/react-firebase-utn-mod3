import React from "react";
import { render } from "@testing-library/react";
import MyApp from "./MyApp";

test("renders learn react link", () => {
  const { getByText } = render(<MyApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
