import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import CardSelected from "./CardSelected";
import { Button } from "@material-tailwind/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardMovie = ({ className, searchQuery,}) => {
  const [movies, setMovies] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovie();
  }, []);

  const handleSeeMoreDetails = (id) => {
    setSelectedCard(id);
  };
  
  const handleDeleteMovie = async (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    try {
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const numberOfPages = Math.ceil(filteredMovies.length / itemsPerPage);


  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <div className="grid-cols-4 grid">
      {paginatedMovies.map((movie) => (
        <Card
          key={movie.id}
          className={`p-10 bg-sky-500 m-5 rounded relative ${className}`}
        >
          <CardBody className=" flex-col justify-center items-center flex">
            <Typography className="font-bold text-white" >
              {movie.title}
            </Typography>
            <img src={movie.img} alt="logo" className="w-60 h-80" />
            {selectedCard === movie.id && (
              <CardSelected
                castCrew={movie.castCrew}
                genre={movie.genre}
                releaseDate={movie.releaseDate}
                rating={movie.rating}
                onClose={() => setSelectedCard(null)}
              />
            )}
          </CardBody>
          <CardFooter className="absolute bottom-1 left-9 m-auto w-3/4  z-50 bg-blue-800 hover:bg-blue-900 text-white  cursor-pointer  border rounded ">
            <Button
              className="font-bold text-base w-full"
              onClick={() => handleSeeMoreDetails(movie.id)}
            >
              See More Details
            </Button>
          </CardFooter>
          <div className="flex justify-end w-full p-2 z-10 absolute bottom-0 left-0">
          <FontAwesomeIcon
            className="cursor-pointer text-red-500"
            icon={faTrash}
            onClick={() => handleDeleteMovie(movie.id)}
          />
          </div>
        </Card>
      ))}
      </div>
      <div className="flex justify-center mt-4 w-screen mb-5">
        {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={` mx-1 p-2 border rounded text-base ${pageNumber === currentPage ? 'bg-blue-600 text-white' : ''}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardMovie;
