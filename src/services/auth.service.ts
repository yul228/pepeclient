import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const AuthService = {
  async register(userData: {
    email: string;
    password: string;
  }) {
 
    return axios.post(`${API_URL}/auth/registration`, userData);
  },
};
