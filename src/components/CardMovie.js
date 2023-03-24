import { useEffect, useState } from "react";
import {  CardBody, Typography } from "@material-tailwind/react";
import CardSelected from "./CardSelected";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoBackground from "./VideoBackground";

const CardMovie = ({ searchQuery,}) => {
  const [movies, setMovies] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
  console.log(selectedCard)

  return (
    <>
    <VideoBackground className="h-screen w-screen "/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  min-h-screen pb-20 items-center">
      {paginatedMovies.map((movie) => (
        <div key={movie.id} className="p-10  bg-orionColor bg-opacity-95 m-5 rounded h-3/8  cursor-pointer hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="relative">
            <CardBody onClick={() => handleSeeMoreDetails(movie.id)} className="flex-col justify-center items-center flex">
              <Typography className="font-bold text-white mb-5">{movie.title}</Typography>
              <img src={movie.img} alt="logo" className="w-full rounded-xl h-96" />
            </CardBody>
            <CardSelected
              movie={movie}
              open={selectedCard === movie.id}
              onClose={() => setSelectedCard(null)}
            />
            <div className="flex justify-end w-full p-2 z-10 absolute bottom-0 left-0">
              <FontAwesomeIcon
                className="cursor-pointer text-red-500"
                icon={faTrash}
                onClick={() => handleDeleteMovie(movie.id)}
              />
            </div>
          </div>
        </div>
      ))}

      </div>
      <div className="flex justify-center  w-screen bg-black bg-opacity-90 pb-5 pt-5 ">
        {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`mx-1 p-2 text-white border rounded text-base ${pageNumber === currentPage ? 'bg-blue-600 text-white' : ''}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};

export default CardMovie;
