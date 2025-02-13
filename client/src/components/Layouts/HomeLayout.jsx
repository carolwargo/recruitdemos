import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeHeader from '../Headers/HomeHeader';

const ProductLayout = () => {
    return (
        <div>
            <div>
                <HomeHeader />   
        <Outlet />
        </div>
        </div>
    );
    }
    
    
    export default ProductLayout;