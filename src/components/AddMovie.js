import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ImageAdd from "../images/ImageAdd.jpg"

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

const initialValue = {
  title: '',
  img: '',
  genre: '',
  rating: 0,
  releaseDate: '',
  castCrew: '',
}


function AddMovie({ addMovie }) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [file, setFile] = useState(null);
  const [formError, setFormError] =  useState(true)

 const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.genre || !formData.rating || !formData.releaseDate || !formData.castCrew || !file) {
      setFormError(false);
      return;
    }

      const newMovie = {
        title: formData.title,
        img: await readFileAsDataURL(file) ,
        genre: formData.genre,
        rating: formData.rating,
        releaseDate: formData.releaseDate,
        castCrew: formData.castCrew,
      };
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      })
        .then((response) => response.json())
        .then((data) => {
          addMovie(data);
          navigate('/');
        })
        .catch((error) => console.log(error));

    setFormData(initialValue);
    setFile(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile instanceof Blob) {
      setFile(selectedFile);
    }
  };

  return (
    <div className='relative'>
      <img className='aboslute h-screen w-screen top-0 left-0 -z-10 object-cover' src={ImageAdd}  />
        <form className="flex flex-col justify-center items-center border p-5 text-center gap-10 w-screen bg-black bg-opacity-40 text-white absolute bottom-0 h-screen" onSubmit={handleSubmit}>
          <label className=" flex-col  flex justify-around w-2/6 items-center mb-3">
            <span className="font-bold">Title:</span>
            <input
              className="border border-gray-400 py-2 px-3 mt-1 rounded-md text-black"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </label>
          <label className="flex-col flex justify-around w-2/6 items-center mb-3">
            <span className="font-bold">Genre:</span>
            <input
              className="border border-gray-400 py-2 px-3 mt-1 rounded-md text-black"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
            />
          </label>
          
          <label className=" flex-col flex justify-around w-2/6 items-center mb-3">
            <span className="font-bold">Cast &amp; Crew:</span>
            <input
              className="border border-gray-400 py-2 px-3 mt-1 rounded-md text-black"
              type="text"
              name="castCrew"
              value={formData.castCrew}
              onChange={handleInputChange}
            />
          </label>
          <label className=" flex-col flex justify-around w-2/6 items-center mb-3">
            <span className="font-bold">Release Date:</span>
            <input
              className="border border-gray-400 py-2 px-3 mt-1 rounded-md text-black"
              type="text"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
            />
          </label>
          <label className=" flex-col flex justify-around  w-2/6 items-center mb-3">
            <span className="font-bold">Rating:</span>
            <input
              className="border border-gray-400 py-2 px-3 mt-1 rounded-md w-2/8  text-black"
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              min="1"
              max="10"
              pattern="[1-9]|10"
              title="Please enter a number between 1 and 10"
              required
            />
          </label>
          <label className="flex-col flex justify-around w-2/6 items-center mb-3">
            <span className="font-bold">Image:</span>
            <input
              className="border border-gray-400 py-2 px-3 mt-1 rounded-md text-white"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          
          {!formError && (
            <p className="text-red-500 font-bold mt-3">Please Fill All The Fields</p>
          )}
          <div className="w-screen flex justify-center items-center mt-5">
            <button className="border rounded-md py-2 px-4  flex justify-center items-center h-10 bg-orionBlue font-bold w-40 hover:bg-orionGreen transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" type="submit">
              Add Movie
            </button>
          </div>
      </form>
    </div>
  );
}

export default AddMovie;
