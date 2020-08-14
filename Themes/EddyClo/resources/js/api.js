import axios from "axios";

const api = () => {
    const csrf_token = document.head.querySelector('meta[name="csrf-token"]');
    const auth_token = localStorage.getItem("auth_token");
    return axios.create({
        baseURL: "/api/",
        headers: {
            Accept: "application/json",
            "X-CSRF-TOKEN": csrf_token && csrf_token.content,
            Authorization: `Bearer ${auth_token}`
        }
    });
};

export default api;
