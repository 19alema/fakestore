import React from 'react'
import{BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import{FaCcVisa,FaCcApplePay, FaPaypal, FaCcAmazonPay, FaCcPaypal} from "react-icons/fa"
function Footer() {
  return (
    <div className="container text-center md:text-left py-[4em]">
      
          <div className="md:flex justify-around items-start py-[2em]">
              <div>
                  <h3 className="font-[900] text-blue-900 underline w-[100%] py-2">EXPLORE</h3>
                  <ul>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">Jewelery</a>
                      </li>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">Men</a>
                      </li>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">Electronics</a>
                      </li>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">Women</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-[900] text-blue-900 underline w-[100%] py-2">ABOUT</h3>
                  <ul>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">About us</a>
                      </li>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">Contact us</a>
                      </li>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">Shipping and returns</a>
                      </li>
                      <li>
                        <a className="py-2 font-bold text-slate-600 hover:text-orange-600" href="#">Women</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-[900] text-blue-900 underline w-[100%] py-2">CONNECT</h3>
                  <p className="">Join our mailing list for news and offers!</p>
                  <form className="py-4">
                      <input className="p-2 border-2 rounded-[25px] mr-3" type="email" name="email" id="email" placeholder="Join our Mailing"/>
                      <button type="submit" className="py-2 hover:bg-orange-900 px-5 text-white rounded-[25px] bg-orange-600">Subscribe</button>
                  </form>
              </div>
          </div>

          <div className="py-[3em] border-t-2 pb-[2em]">
              <div  className="flex py-2  items-center justify-center text-orange-900">
                  <a className="ml-4 text-xl cursor-pointer" href="www.facebook.com"><BsFacebook /></a>
                  <a className="ml-4 text-xl cursor-pointer" href="www.twitter.com"><BsTwitter /></a>
                  <a className="ml-4 text-xl cursor-pointer" href="www.instagram.com"><BsInstagram /></a>
              </div>
              <div className=" py-2 flex items-center justify-center text-orange-900">
              <a className="ml-4 text-xl cursor-pointer" href="#"><FaCcAmazonPay /></a>
                  <a className="ml-4 text-xl cursor-pointer" href="#"><FaCcApplePay /></a>
                  <a className="ml-4 text-xl cursor-pointer" href="#"><FaCcPaypal /></a>
                  <a className="ml-4 text-xl cursor-pointer" href="#"><FaPaypal /></a>
                  <a className="ml-4 text-xl cursor-pointer" href="#"><FaCcVisa /></a>
                  
              </div>

              <h1 className="pt-[2em] text-slate-600 text-center">&copy; 2022 EddyStores</h1>
          </div>
    </div>
  )
}

export default Footer