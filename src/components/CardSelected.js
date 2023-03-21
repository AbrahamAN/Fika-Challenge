import { useState } from 'react';
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import { faXmark } from '@fortawesome/free-solid-svg-icons'
  import {
    StarIcon,
  } from "@heroicons/react/24/solid";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   
  const CardSelected = ({onClose}) => {


    const [showCard, setShowCard] = useState(true);

    const handleHideCard = () => {
      setShowCard(false);
      onClose(); // llamando a la función onClose que se pasó como prop desde CardMovie
    };
  
    if (!showCard) {
      return null;
    }

    return (
      <Card  className="h-3/4 absolute w-full text-white  shadow-lg z-20 bg-black bg-opacity-40">
        <div className="flex justify-end w-full p-2">
          <FontAwesomeIcon className="cursor-pointer"  icon={faXmark} onClick={handleHideCard} />
        </div>
        <CardBody >
          <div className="mb-3 flex flex-col gap-5 items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Genre
            </Typography>
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Cast & Crew
            </Typography>
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Release Date
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              5.0
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }
  export default CardSelected