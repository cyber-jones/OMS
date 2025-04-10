import axios from "axios";

export const axioAnonymous = (url) =>
  axios.create({
    baseURL: url,
    headers: { "Content-Type": "application/json" },
  });

