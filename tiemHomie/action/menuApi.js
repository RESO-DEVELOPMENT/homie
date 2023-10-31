// productApi.js

import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosClient";

//api test need to fix in future

export const getAllProduct = async () => {
  try {
    // Login request
    const loginResponse = await axiosInstance.post("/auth/login", {
      username: "test",
      password: "123",
    });
    const accessToken = loginResponse.accessToken; // Access the access_token

    const response = await axiosInstance.get(
      `/brands/menus?brandCode=deercoffee`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
