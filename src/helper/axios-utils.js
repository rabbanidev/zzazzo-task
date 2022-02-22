import axios from "axios";

const client = axios.create({ baseURL: "https://fakestoreapi.com" });

export const request = async ({ ...options }) => {
  const res = await client(options);
  return res;
};
