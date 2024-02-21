import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/';

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = resource => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: id => api.get(`/${resource}/${id}`),
    create: newData => api.post(`/${resource}`, newData),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: id => api.delete(`/${resource}/${id}`),
  };
};

const sendMessage = resourceApi('help');

export { sendMessage };
