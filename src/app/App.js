import React from "react";
import MeetingLinkGenerator from "../page/MeetingLinkGenerator/MeetingLinkGenerator"; // Import MeetingLinkGenerator component
import Home from "../page/home/Home"; // Import Home component
import "./App.scss"; // Import App component styles
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route from react-router-dom

// App component to define routing for different pages
function App() {
  return (
    <div className="App">
      {/* BrowserRouter to enable routing */}
      <BrowserRouter>
        {/* Routes component to define route mapping */}
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for MeetingLinkGenerator page */}
          <Route path="/generator-meeting" element={<MeetingLinkGenerator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; // Export the App component
