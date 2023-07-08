// productApi.js

import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosClient";

export const getAllProduct = async () => {
  try {
    // Login request
    const loginResponse = await axiosInstance.post("/auth/login", {
      username: "homiestaff",
      password: "123456",
    });
    const accessToken = loginResponse.accessToken; // Access the access_token

    // Create a query string

    // const queryString = `?type=${type}&page=${page}&size=${size}`;

    // Fetch products using accessToken and query string
    const response = await axiosInstance.get(`/stores/menus`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
