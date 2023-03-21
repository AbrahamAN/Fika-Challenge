  import {useState} from "react"
  import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import HoverVideoPlayer from 'react-hover-video-player';
  import Titanic from "../images/Titanic.jpg"
  import TitanicVideo from "../videos/TitanicVideo.mp4"
  import CardSelected from "./CardSelected";
  import { Button } from "@material-tailwind/react";
  import { faTrash } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

   
 const CardMovie = () => {
  
  const [showCardSelected, setShowCardSelected] = useState(false);

  const handleSeeMoreDetails = () => {
    setShowCardSelected(true);
  };


    return (
      <Card className="w-auto h-2/5 m-5 rounded relative">
        <CardBody >
            <HoverVideoPlayer
            // videoSrc={TitanicVideo}
            pausedOverlay={
                <img
                src={Titanic}
                alt="logo"
                style={{
                    // Make the image expand to cover the video's dimensions
                    objectFit: 'cover',
                  }}
                />
            }
            loadingOverlay={
                <div className="loading-overlay">
                <div className="loading-spinner" />
                </div>
            }
            />
            {showCardSelected && (
              <CardSelected onClose={() => setShowCardSelected(false)} />
            )}
        </CardBody>
        <CardFooter  className="absolute -bottom-10 left-10 m-auto w-3/4  z-10 bg-blue-800 hover:bg-blue-900 text-white  cursor-pointer  border rounded ">
          <Button className="font-bold text-base w-full" onClick={handleSeeMoreDetails}>See More Details</Button>
        </CardFooter>
        <div className="flex justify-end w-full p-2 z-50 absolute -bottom-16">
          <FontAwesomeIcon className="cursor-pointer text-red-500"  icon={faTrash}/>
        </div>
      </Card>
    );
  }

  export default CardMovie