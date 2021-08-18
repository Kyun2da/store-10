import axios from 'axios';

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'http://3.38.92.37:3000';

export default client;
