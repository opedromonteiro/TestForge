import axios from "axios";

const API_BASE_URL = "http://localhost:3030/api"; // Backend base URL

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Set the token dynamically for authenticated requests
export const setAuthToken = async (token) => {
    if (token) {
        apiClient.defaults.headers.common["Authorization"] = token;
    } else {
        delete apiClient.defaults.headers.common["Authorization"];
    }
};

// API functions
export const login = async (username, password) => {
    const response = await apiClient.post("/auth/login", { username, password });
    return response.data; // returns token
};

export const getAllEquips = async () => {
    const response = await apiClient.get("/equips");
    return response.data;
};

export const getUserEquips = async () => {
    const response = await apiClient.get("/users/equips");
    return response.data;
};

export const leaseEquip = async (equipId) => {
    const response = await apiClient.patch("/users", { equip_id: equipId });
    return response.data;
};

export const returnEquip = async (equipId) => {
    const response = await apiClient.post(`/users/return/${equipId}`);
    return response.data;
};
