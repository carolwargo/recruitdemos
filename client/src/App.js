import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import DemoPage1 from "./pages/DemoPage1";


import ErrorBoundary from "./ErrorBoundary.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage1 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}
// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}
export default App;
