import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

   const [movies, setMovies] = useState([])

   useEffect(() => {
     fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then((data) => {
      setMovies(data)
        
    })
    
   }, [])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {
         movies && movies.map((movie) =>{
           return <MovieCard key={movie.id} title={movie.title} id = {movie.id}/>
         })
        }

        
      </main>
    </>
  );
};

export default Home;