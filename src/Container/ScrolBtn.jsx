import React,{useState, useEffect} from 'react'
import {FaAngleUp} from "react-icons/fa"
function ScrolBtn() {

    useEffect(() => {

        const scrollBtn = document.querySelector("div")
        window.onscroll = () => {
            scrollBtn.addEventListener("click", () => {
                if (window.scrollY > 500) {
                  window.scrollTo(0,0)
                }
          })
        }
    })
  return (
        <div className="font-[900]  hidden md:block text-center border-2 border-orange-800 p-2 rounded-md cursor-pointer fixed bottom-[15em] right-[20px] text-orange-800 ">
          <FaAngleUp />
          <h4>Top</h4>
        </div>
  )
}

export default ScrolBtn