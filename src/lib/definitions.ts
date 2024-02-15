export type quote = {
    id: number;
    quote: string;
    anime: string;
    character: string;
}

interface Genre {
    id: number;
    name: string;
}

export type schedule = {
    url: string;
    mal_id: number,
    images: any;
    title: string;
    aired: any;
    genres: Genre[];
    episodes: number;
    score: number;
}