import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from "./urls"

const apiBaseUrl = 'http://reso-product-api.reso.vn/api/v1'; // Retrieve the API base URL from the environment variable

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config if needed (e.g., add headers, authentication tokens)
    if (typeof window !== 'undefined') { // Check if running in a browser environment
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response.data;
  },
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default axiosInstance;
