import axios from "axios";
let url = "https://jsonplaceholder.typicode.com/userqs/1"
const testConnection = async () => {
  try {

  let axiosInstance = axios.create({
    validateStatus: status => status >= 200 && status <= 503
  })

    let response = await axiosInstance.get(url);
    return response.status === 200;
  } catch (error) {
    console.log(error);
  }
};

export {testConnection}