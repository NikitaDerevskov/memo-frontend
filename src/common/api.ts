const axios = require('axios').default;

/* TODO export cards, auth and etc, create basic transport */
/* TODO export urls to constants */
/* TODO add basic headers (token for example) */
/* TODO add cancel request ? */

class Api {
  serverUrl: string = 'http://localhost:3000';

  static getToken() { // TODO refactor
    return sessionStorage.getItem('token');
  }

  login(email: string, password: string) {
    return axios.post(`${this.serverUrl}/api/login`, {
      email,
      password,
    });
  }

  getFolders() {
    return axios.get(
      `${this.serverUrl}/api/get-folders`,
      { headers: { Authorization: Api.getToken() } },
    );
  }

  getFolderCards(folderId: number) {
    return axios.get(
      `${this.serverUrl}/api/get-cards`,
      { params: { folderId }, headers: { Authorization: Api.getToken() } },
    );
  }

  /* TODO work with type better */
  createCard({ folderId, content, title }: {folderId: number, content: string, title: string}) {
    return axios.post(
      `${this.serverUrl}/api/create-card`,
      { folderId, content, title },
      { headers: { Authorization: Api.getToken() } },
    );
  }

  deleteCard(cardId: number) {
    return axios.delete(
      `${this.serverUrl}/api/delete-card`,
      { params: { cardId }, headers: { Authorization: Api.getToken() } },
    );
  }
}

export default new Api();
