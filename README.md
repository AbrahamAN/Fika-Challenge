Architecture and Technologies Used
Application Name: Movie Management System

Purpose: Allows users to view, search, add, and remove movies from a database.

Programming Languages and Frameworks:

React: JavaScript library for building user interfaces
Tailwind CSS: utility-first CSS framework for rapidly building custom designs
React Router: routing library for single-page applications in React
Material Tailwind: React component library built with Tailwind CSS and following Material Design principles
FontAwesome: icon library to be used within the application
External Technologies and Services:

JSON Server: emulates a RESTful API that is used as a database for storing and managing movies
Startup Scripts and Steps to Run the Application
To run the application in a local environment, follow these steps:

Prerequisites:

Make sure you have Node.js and npm installed on your system.
Steps:

Clone the application repository to your local machine.
Navigate to the project folder and run npm install to install the necessary dependencies.
Start the JSON server by running the following command: json-server --watch db.json. This will start the JSON server on the default port (usually 3000).
In a new terminal, navigate to the project folder and run npm start. This will launch the React application in the browser on port 3001 (or the next available port if 3001 is occupied).
You should now have the application running and ready to be used in your browser.
