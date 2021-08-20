import axios from 'axios';

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL = process.env.SERVER_API_HOST;

export default {
  async post<T>(url: string, body: T) {
    try {
      const res = await client.post(url, body);
      return res.data.result;
    } catch (e) {
      throw new Error(e.response?.data?.message || e.message || e);
    }
  },

  async get<T>(url: string): Promise<T> {
    try {
      const res = await client.get(url);
      return res.data.result;
    } catch (e) {
      throw new Error(e.response?.data?.message || e.message || e);
    }
  },

  async delete<T>(url: string): Promise<T> {
    try {
      const res = await client.delete(url);
      return res.data.result;
    } catch (e) {
      throw new Error(e.response?.data?.message || e.message || e);
    }
  },

  async put<T>(url: string, body: T) {
    try {
      const res = await client.put(url, body);
      return res.data.result;
    } catch (e) {
      throw new Error(e.response?.data?.message || e.message || e);
    }
  },
};
