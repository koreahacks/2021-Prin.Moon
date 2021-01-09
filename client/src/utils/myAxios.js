import axios from "axios";

const serverURL = "http://localhost:4000";

const URL = `${serverURL}/api`;

const myAxios = {
  get: async (path) => {
    return await axios.get(URL + path, { withCredentials: true });
  },

  post: async (path, data) => {
    return await axios.post(URL + path, data, { withCredentials: true });
  },

  put: async (path, data) => {
    return await axios.put(URL + path, data, { withCredentials: true });
  },

  delete: async (path) => {
    return await axios.delete(URL + path, { withCredentials: true });
  },
};

export default myAxios;
