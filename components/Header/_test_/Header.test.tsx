import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

test("renders a message", () => {
  const { getByText } = render(<Header />);
  expect(getByText("ANALYZE ASAs")).toBeInTheDocument();
});
