import React from "react";
import { render } from "@testing-library/react"
import Stations from "./StationsList";

describe("Stations", () => {
  it("renders correctly", async () => {
    const { findByText } = render(<Stations />);
    const title = await findByText("LISTE DES STATIONS");
    expect(title).toBeDefined();
  });
});