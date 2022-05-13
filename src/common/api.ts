const axios = require('axios').default;


class Api {
    serverUrl: string = 'http://localhost:3000'

    getToken() { // TODO refactor
        return sessionStorage.getItem('token')
    }

    login (email: string, password: string) {
        return axios.post(`${this.serverUrl}/api/login`, {
            email,
            password
        })
    }

    getFolders() {
        return axios.get( `${this.serverUrl}/api/get-folders` ,
            { headers: {"Authorization" : this.getToken()} })
    }
}

export default new Api()