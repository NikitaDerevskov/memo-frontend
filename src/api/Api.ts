import axios from 'axios';

export class AuthService {
  signIn(email: string, password: string) {
    return axios.post('/api/login', { email, password });
  }

  register(username: string, email: string, password: string) {
    return axios.post('/api/register', { username, email, password });
  }

  getCurrentUserByToken(token: string) {
    return axios.get('/api/me', { headers: { Authorization: token } });
  }
}
