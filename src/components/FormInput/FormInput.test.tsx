import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import mockFetch from "../../services/mocks/mockFetch";
import userEvent from "@testing-library/user-event";
import FormInput from "./FormInput";

describe("FormInput test suit", () => {
  let windowFetchSpy: any = undefined;
  beforeEach(() => {
    windowFetchSpy = jest.spyOn(global, "fetch").mockImplementation(mockFetch);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("should get nationalities for a name", async () => {
    render(<FormInput />);

    //simulate filling up the textbox
    const personNameInput = screen.getByRole("textbox");
    // fireEvent.change(personNameInput, { target: { value: "john" } });
    await userEvent.type(personNameInput, "john");
    expect(personNameInput).toHaveValue("john");

    //click the button
    const getNationalitiesBtn = screen.getByRole("button", {
      name: "Get Nationalities",
    });
    expect(getNationalitiesBtn).not.toBeDisabled();
    await userEvent.click(getNationalitiesBtn);

    //verify percent and flag images are displayed
    expect(await screen.findByText("3 guesses found")).toBeVisible();

    expect(windowFetchSpy).toHaveBeenCalled();
    expect(windowFetchSpy).toHaveBeenCalledWith(
      "https://api.nationalize.io/?name=john"
    );
    expect(screen.getByText("US - 4.84%")).toBeVisible();
    expect(screen.getByText("IM - 4.44%")).toBeVisible();
    expect(screen.getByText("IE - 4.21%")).toBeVisible();

    const flagImages = screen.getAllByRole("img");
    expect(flagImages).toHaveLength(3);
    expect(flagImages[0]).toHaveAccessibleName("US flag");
    expect(flagImages[1]).toHaveAccessibleName("IM flag");
    expect(flagImages[2]).toHaveAccessibleName("IE flag");
  });
});
