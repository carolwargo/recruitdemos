import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import HomePage from "./pages/HomePage";
import DemoPage1 from "./pages/DemoPage1";
import DemoDownloads from "./pages/DemoDownloads";
import DemoMedia from "./pages/DemoMedia.jsx";
import DisplaysPage from "./pages/DisplaysPage";
import CarouselPage from "./pages/CarouselPage.jsx";

import TestPage from "./pages/TestPage";  


import DemoPage3 from "./pages/DemoPage3.jsx";
import DemoSocialPage from "./pages/DemoSocialPage";
import DemoOverviewPage from "./pages/DemoOverviewPage";
import DemoComponents from "./pages/DemoComponents";
import FaqsPage from './pages/FaqsPage';


import ErrorBoundary from "./ErrorBoundary.jsx";
import DemoLayout from "./components/Layouts/DemoLayout.jsx";



function App() {
  return (
    <div className="App">
      <BrowserRouter basename="recruit-demos">
        <ErrorBoundary>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<DemoOverviewPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
       
       
       <Route element={<DemoLayout />}>
       <Route path="/demo1" element={<DemoPage1 />} />
        <Route path="/downloads" element={<DemoDownloads />} />
        <Route path="/demo3" element={<DemoPage3 />} />
        <Route path="/social" element={<DemoSocialPage />} />
        <Route path="/components" element={<DemoComponents />} />
        <Route path="/media" element={<DemoMedia />} />
        <Route path="/displays" element={<DisplaysPage />} />
       </Route>
        </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#007BFF", textDecoration: "underline" }}>
        Return to Home
      </a>
    </div>
  );
}
export default App;
