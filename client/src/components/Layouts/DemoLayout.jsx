import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../TopNav';

const DemoLayout = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar'); // Ensure this selector matches your Navbar's class
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div className="forms-layout" style={{ marginTop: `${navHeight}px` }}>
      <TopNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DemoLayout;
