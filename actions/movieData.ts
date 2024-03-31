import { getApiResponse } from "@/lib/request";

export const fetchTrending = async () => {
  const data = await getApiResponse("/trending/movie/week");
  const trending = data.results;
  
  return trending;
};


export const fetchGenreMovies = async () => {
    const data = await getApiResponse("/genre/movie/list")
    const genres = data.genres
    for (const genre of genres) {
        const data = await getApiResponse(`/discover/movie?with_genres=${genre.id}`)
        // Add movies array to genre object --> For examples: genre = { id: 35, name: 'Comedy', movies: [ ... ]},
        genre.movies = data.results
      }
      return genres
    }

    export const movieDetails = async (id: number) => {
        
    }