require("dotenv/config");
import { logout } from "./logout.js";
import { LocalStorageMock } from "../../../mocks/LocalStorage.mock.js";

global.localStorage = new LocalStorageMock();

describe("Logout", () => {
  it("Clears the token from local storage", async () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(JSON.parse(localStorage.getItem("token"))).toEqual(null);
  });
});
