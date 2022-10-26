const axios = require("axios").default;

/* TODO export cards, auth and etc, create basic transport */
/* TODO export urls to constants */
/* TODO add basic headers (token for example) */
/* TODO add cancel request ? */

class Api {
  serverUrl: string = "http://localhost:3000";

  setToken(token: string) {
    axios.defaults.headers.common.Authorization = token;
  }

  login(email: string, password: string) {
    return axios.post(`${this.serverUrl}/api/login`, {
      email,
      password,
    });
  }

  registration(name: string, email: string, password: string) {
    return axios.post(`${this.serverUrl}/api/register`, {
      name,
      email,
      password,
    });
  }

  getFolders() {
    return axios.get(`${this.serverUrl}/api/get-folders`, {});
  }

  createFolder(title: string) {
    return axios.post(
      `
    ${this.serverUrl}/api/create-folder`,
      { title }
    );
  }

  editFolder(title: string, folderId: number) {
    return axios.put(
      `
    ${this.serverUrl}/api/edit-folder`,
      { title, folderId }
    );
  }

  deleteFolder(folderId: number) {
    return axios.delete(`${this.serverUrl}/api/delete-folder`, {
      params: { folderId },
    });
  }

  getFolderCards(folderId: number) {
    return axios.get(`${this.serverUrl}/api/get-cards`, {
      params: { folderId },
    });
  }

  /* TODO work with type better */
  createCard({
    folderId,
    content,
    title,
  }: {
    folderId: number;
    content: string;
    title: string;
  }) {
    return axios.post(`${this.serverUrl}/api/create-card`, {
      folderId,
      content,
      title,
    });
  }

  editCard(title: string, content: string, id: number) {
    return axios.put(
      `
    ${this.serverUrl}/api/edit-card`,
      { title, content, id }
    );
  }

  deleteCard(cardId: number) {
    return axios.delete(`${this.serverUrl}/api/delete-card`, {
      params: { cardId },
    });
  }
}

export default new Api();
