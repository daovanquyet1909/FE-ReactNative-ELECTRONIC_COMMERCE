// src/services/api/auth.js

import { apiUrl } from '../../config/apiConfig';

export const login = async (email, password) => {
    try {
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            return data.token; // Return token if login successful
        } else {
            throw new Error(data.message || 'Failed to login');
        }
    } catch (error) {
        throw new Error(error.message || 'Failed to login');
    }
};
