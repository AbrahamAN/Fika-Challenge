import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


const Header = ({ className, setSearchQuery }) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const navList = (
    <div className="flex justify-around lg:w-96 w-36">
      <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="/">Home</Link>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="/AddMovie">Add Movies</Link>
        </Typography>
      </ul>
    </div>
  );

  return (
    <Navbar
      className={`bg-white text-black w-screen border-none rounded-none h-20  py-2 px-4 lg:px-8 lg:py-4 ${className}`}
    >
      <div className="container mx-auto flex items-center justify-around text-blue-gray-900">
        <div className="flex w-full items-center">
          <img
            className="h-14 w-14 mr-10"
            src="https://www.oriongovernance.com/wp-content/uploads/2023/02/Orion-Governance-Logo.svg"
            alt="logo origon"
          />
         <SearchBar onSearch={handleSearch} className="border p-1 text-black border-gray-900 rounded-sm w-1/4 h-10" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className=" container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Header