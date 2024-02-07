require("dotenv/config");
import { login } from "./login.js";
import { LocalStorageMock } from "../../../mocks/LocalStorage.mock.js";
import { FetchMock } from "../../../mocks/fetch.mock.js";
import { profileResponse } from "../../../mocks/profileResponse.mock.js";

const fetchMock = new FetchMock();
global.localStorage = new LocalStorageMock();

describe("Login", () => {
  it("Stores a token on valid credentials", async () => {
    global.fetch = fetchMock.success(200, profileResponse);
    await login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("MOCK_TOKEN"),
    );
    expect(JSON.parse(localStorage.getItem("token"))).toEqual("MOCK_TOKEN");
  });

  it("Should return an error on invalid credentials", async () => {
    global.fetch = fetchMock.failure(401, "Unauthorized");
    const email = "invalid@email.com";
    const password = "invalidPassword123";

    await expect(login(email, password)).rejects.toThrow("Unauthorized");
  });
});
