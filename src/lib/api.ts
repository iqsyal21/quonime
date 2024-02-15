import axios from 'axios';

const authUrl = "https://reqres.in/api";
const quoteUrl = "https://animechan.xyz/api";
const animeJikanUrl = "https://api.jikan.moe/v4";
const waifupicsUrl = "https://api.waifu.pics";

export const signIn = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${authUrl}/login`, {
            email: email,
            password: password
        });

        sessionStorage.setItem("token", response.data.token);

        return true
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const signUp = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${authUrl}/register`, {
            email: email,
            password: password
        });

        return true
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getRandomQuote = async () => {
    try {
        const response = await axios.get(`${quoteUrl}/quotes`);

        return response.data;
    } catch (error: any) {
        console.error(error);
        throw error;
    }
}

export const getQuoteByTitle = async (title: string) => {
    try {
        const response = await axios.get(`${quoteUrl}/quotes/anime?title=${title}`);

        return response.data;
    } catch (error: any) {
        throw error
    }
}

export const getAnimeScheduleNow = async () => {
    try {
        const response = await axios.get(`${animeJikanUrl}/seasons/now`);

        return response.data.data;
    } catch (error: any) {
        console.error(error);
        throw error;
    }
}

export const getShcedules = async (year: number, season: string) => {
    try {
        const response = await axios.get(`${animeJikanUrl}/seasons/${year}/${season}`);

        return response.data.data;
    } catch (error: any) {
        console.error(error);
        throw error;
    }
}

export const getWallpaperWaifu = async () => {
    try {
        const response = await axios.post(`${waifupicsUrl}/many/sfw/waifu`, { exclude: [] });

        return response.data.files;
    } catch (error: any) {
        console.error(error);
        throw error;
    }
}
