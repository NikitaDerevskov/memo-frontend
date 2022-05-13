const axios = require('axios').default;


class Api {
    serverUrl: string = 'http://localhost:3000'

    login (email: string, password: string) {
        return axios.post(`${this.serverUrl}/api/login`, {
            email,
            password
        })
    }
}

export default new Api()