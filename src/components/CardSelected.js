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
   
  const CardSelected = ({onClose, movie, open}) => {
    if (!open) {
      return null;
    }

    return (
      <Card className="h-2/8 absolute w-full bg-black bg-opacity-70 text-white bottom-10 shadow-lg z-20  bg-opacity-80">
        <div className="flex justify-end w-full p-2">
          <FontAwesomeIcon className="cursor-pointer" icon={faXmark} onClick={onClose} />
        </div>
        <CardBody >
          <div className="mb-3 flex flex-col gap-5 items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {movie.genre}
            </Typography>
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {movie.castCrew}
            </Typography>
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {movie.releaseDate}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              {movie.rating}
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }
  export default CardSelected