import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';

const Product = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);


  const fetchProducts=async ()=>{
    try{
    const response=await fetch('https://dummyjson.com/products') //API endpoint

    const data=await response.json();
    
    console.log(data)
    setProducts(data);
  }catch (error){
    console.log('error fetching products',error);
  }
  finally{
    setLoading(false);
  }
}

useEffect(()=>{
  fetchProducts();
},[])

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Product</h1>


      {
        loading?<p className="text-center text-pink-700 text-4xl">Loading....</p>:<Productlist products={products}/>
      }
    </div>
    </>
  )
}

export default Product