const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdb = {
  async getPopular() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=zh-CN`);
    return res.json();
  }
};
