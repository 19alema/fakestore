import React,{useState} from 'react'
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
function Card({ image, price, title, id,item }) {
  const[cart, setCart] = useState({})
  const { cartItem } = useSelector((store) => store.cart);
  

  if (!Object.keys(cart).length === 0) {
    console.log(cart)
  } 
  return (
    <div className="my-8 md:my-0 shadow-xl rounded-xl">
    <img src={image} alt={id} className="h-[250px] w-[100%] md:w-[350px] md:h-[150px]" />
    <div className="p-3 md:p-2 bg-slate-100">
      <p className="text-center py-2 font-[600] text-zinc-700">{ title.slice(0, 10)}...</p>
      <p className="text-center py-2 font-[600] text-zinc-700">${price}</p>
      <div className="flex justify-around">
      <button className="btn block p-2 md:p-1 md:text-[8px]  text-sm font-bold hover:bg-orange-900 cursor-pointer bg-orange-600 text-white rounded"  onClick={(e) => setCart(item)}>ADD TO CART</button>
          <Link to={`/product/${id}`}>
          <button className="btn block p-2 md:p-1 md:text-[8px] text-sm font-[900] hover:bg-orange-900 cursor-pointer text-zinc-900 rounded ">DETAIL</button>
       </Link>
      </div>
   </div>
</div>
  )
}

export default Card