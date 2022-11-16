import axios from 'axios';

class AuthService {
  signIn(email: string, password: string) {
    return axios.post('/api/login', { email, password });
  }

  register(username: string, email: string, password: string) {
    return axios.post('/api/register', { username, email, password });
  }

  getCurrentUserByToken(token: string) {
    return axios.get('/api/me', { headers: { Authorization: token } });
  }
  // TODO signout (1 - send request, 2 - remove from header, 3 - remove from localStorage, 4 - redirect to login)
}

export default new AuthService();
