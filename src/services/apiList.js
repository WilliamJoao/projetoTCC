import axios from 'axios';

const api = axios.create({
    baseURL: 'http://minha-lista-dev.azurewebsites.net/api',
});

export default api;
