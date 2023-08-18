import React from "react";
import "whatwg-fetch";
import mockFetch from "./mocks/mockFetch";
import fetchNationalities from "./fetchNationalities";

describe("fetchNationalities test suit", () => {
  const url = "https://api.nationalize.io/?name=john";
  let windowFetchSpy: any = undefined;
  beforeEach(() => {
    windowFetchSpy = jest.spyOn(global, "fetch").mockImplementation(mockFetch);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("should get nationalities for a name", async () => {
    const setNationalities = jest.fn();
    const setMessage = jest.fn();
    const personName = "john";
    const nationalities = await fetchNationalities(
      setNationalities,
      setMessage,
      personName
    );
    console.log("nation", nationalities, windowFetchSpy);
    expect(windowFetchSpy).toHaveBeenCalled();
    expect(windowFetchSpy).toHaveBeenCalledWith(url);
  });
});
