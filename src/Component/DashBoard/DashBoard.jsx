import React from 'react';


import ProductForm from './../../ProductManagement/ProductForm';
import ProductTable from './../../ProductManagement/ProductTable';
import { useState } from 'react';
const DashBoard = () => {

    const [product,setProduct] = useState([])

    const addProductHandle = (item) =>{
        const allProduct =[...product,item]
        setProduct(allProduct)
    }
    return (
        <div>
           <ProductForm addProductHandle={addProductHandle}></ProductForm>
           <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default DashBoard;