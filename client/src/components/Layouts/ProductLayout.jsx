import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductHeader from '../Headers/ProductHeader';

const ProductLayout = () => {
    return (
        <div>
            <div>
                <ProductHeader />   
        <Outlet />
        </div>
        </div>
    );
    }
    
    
    export default ProductLayout;