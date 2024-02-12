export class FetchMock {
  success(status = 200, response = {}) {
    return jest.fn().mockResolvedValue({
      ok: true,
      status,

      json: () => {
        return Promise.resolve(response);
      },
    });
  }

  failure(status = 401, statusText = "Error") {
    return jest.fn().mockResolvedValue({
      ok: false,
      status,
      statusText,
    });
  }
}
