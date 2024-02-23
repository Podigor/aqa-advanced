export default class UserController {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async fetchUserById(id) {
    const response = await fetch(`${this._baseUrl}/users/${id}`);
    const bodyJson = await response.json();
    return bodyJson;
  }
}
