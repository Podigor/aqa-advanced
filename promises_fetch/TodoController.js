export default class TodoController {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async fetchToDoById(id) {
    const response = await fetch(`${this._baseUrl}/todos/${id}`);
    const bodyJson = await response.json();
    return bodyJson;
  }
}
