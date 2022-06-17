import React,{useEffect, useState} from 'react'
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import {AiFillStar} from "react-icons/ai"
function Product() {
  const { id } = useParams();
  const[product, setProduct] = useState([])
  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
      .then(json => {
        setProduct(json)
        console.log(json)
        })
   }
  },[id])
  return (
    <div className="container p-5">
      <Link to="/">
        <p className="bg-orange-600 text-center p-2 rounded text-white max-w-[250px] m-auto"> Back Home</p>
      </Link>

      <div className="md:grid border-2 my-4 p-3 rounded grid-cols-2 gap-2 pt-5  justify-center ">
        <img className="h-[250px] text-center" src={product?.image} alt={product.id} />

        <div>
          <div className="flex py-1 items-start">
            <h1 className="text-orange-600">Name:</h1>
            <span className="pl-2 text-sm"> {product?.title }</span>
          </div>
          <div className="flex py-1 item-start">
            <h1 className="text-orange-600">Category:</h1>
            <span className="pl-2 text-sm"> {product?.category }</span>
          </div>
          
          <div className="flex py-1 item-start">
            <h1 className="text-orange-600">Info:</h1>
            <span className="pl-2 text-sm"> {product?.description}</span>
          </div>
          
          <div className="flex py-1 item-start">
            <h1 className="text-orange-600">Price:</h1>
            <h1 className="pl-2  text-2xl"> ${product?.price }</h1>
         </div>
          
        </div>
      </div>
    </div>
  )
}

export default Product