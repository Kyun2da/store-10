import axios from 'axios';

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL = process.env.SERVER_API_HOST;

export default client;
