import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("test for render", () => {
    const testForRender = render(<Dashboard />);
  });
  it("test for button renders", () => {
    const dash = render(<Dashboard />);
    const strikeButton = dash.getByText(/strike/i);
    const ballButton = dash.getByText(/ball/i);
    const hitButton = dash.getByText(/hit/i);
    const foulButton = dash.getByText(/foul/i);

    expect(strikeButton).toHaveTextContent(/strike/i);
    expect(ballButton).toHaveTextContent(/ball/i);
    expect(hitButton).toHaveTextContent(/hit/i);
    expect(foulButton).toHaveTextContent(/foul/i);
  });
});
