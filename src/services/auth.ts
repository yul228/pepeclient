import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authApi = {
    login: (data: { email: string; password: string }) => {
        return axios.post(`${API_URL}/auth/registration`, data);
    },
};