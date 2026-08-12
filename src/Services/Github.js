import axios from 'axios';

const API_URL = 'https://api.github.com';
const CONTRIBUTIONS_API = 'https://github-contributions-api.jogruber.de/v4';

export const githubService = {
    getUserProfile: async (username) => {
        try {
            const response = await axios.get(`${API_URL}/users/${username}`);
            
            return response.data;
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    },

    getUserRepositories: async (username) => {
        try {
            const response = await axios.get(`${API_URL}/users/${username}/repos?sort=updated&per_page=100`);
            return response.data;
        } catch (error) {
            console.error('Error fetching repositories:', error);
            throw error;
        }
    },

    getUserContributions: async (username, year) => {
        try {
            const yearParam = year ? `?y=${year}` : '?y=last';
            const response = await axios.get(`${CONTRIBUTIONS_API}/${username}${yearParam}`);

            if (!response.data) {
                return null;
            }

            return response.data;
        } catch (error) {
            console.error('Error fetching contributions:', error);
            return null;
        }
    }
};
