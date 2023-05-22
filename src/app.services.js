import axios from "axios";
// const apiDomain = "http://localhost:3456";
const apiDomain = "https://audioapp.onrender.com"

export const getUserList = async () => {
  return await axios.get(apiDomain + "/").then((data) => {
    return data;
  });
};

export const submit = async (formData) => {
  return await axios.post(apiDomain + "/submit", formData).then((data) => {
    return data.data;
  });
};
