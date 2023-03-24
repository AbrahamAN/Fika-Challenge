import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form className=" flex flex-col border p-5 text-center" onSubmit={handleSubmit}>
      <label className="mr-5">
        Title:
        <input
        className='border m-1'
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        />
      </label>
      <label>
        Genre:
        <input
        className='border m-1'
        name="genre"
        value={formData.genre}
        onChange={handleInputChange}
        />
      </label>
      <label>
        Rating:
        <input
        className='border m-1'
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleInputChange}
        />
      </label>
      <label>
        Cast & Crew:
        <input
        className='border m-1'
        type="text"
        name="castCrew"
        value={formData.castCrew}
        onChange={handleInputChange}
        />
      </label>
      <label>
        Release Date
        <input
        className='border m-1'
        type="text"
        name="releaseDate"
        value={formData.releaseDate}
        onChange={handleInputChange}
        />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      {!formError && (
        <p className='text-red-500 font-bold mt-3'> Please Fill All The Fields</p>
      )}
      <div className='W-screen flex justify-center items-center m-5'>   
      <button className='border  rounded p-1 w-28 flex justify-center items-center h-10 hover:bg-gray-200' type="submit">Add Movie</button>
      </div>
    </form>
  );
}

export default AddMovie;
