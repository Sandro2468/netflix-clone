import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { fetchGenreMovies } from "@/actions/movieData";
import CategoryList from "@/components/CategoryList";
import { Genre } from "@/lib/types";
const Home = async () => {
  const genres = await fetchGenreMovies();
  const example = genres.slice(0, 2);
  // console.log(example)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="all-movies">
        {example.map((genre: Genre) => (
          <CategoryList
            key={genre.id}
            title={genre.name}
            movies={genre.movies}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
