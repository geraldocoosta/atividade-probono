import axios from 'axios';

export default (function Api() {
  return axios.create({
    baseURL: 'https://5d2df37343c343001498d72a.mockapi.io/',
    responseType: 'json',
  });
}())