import axios from "axios";

const token = document.head.querySelector('meta[name="csrf-token"]');

function createClient() {
    const client = axios.create({
        baseURL: '/api/',
        headers: {
            Accept: 'application/json',
            'X-CSRF-TOKEN': token && token.content,
        },
    })
}