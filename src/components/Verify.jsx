import React, {useState, useEffect} from "react"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import { FaSearch } from "react-icons/fa";
import { TbShoppingBagX } from "react-icons/tb";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import email from "../assets/email.png"
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import list from "../list.json"
import list2 from "../list2.json"
import ball from "../assets/ball.png"
import { FaAlignJustify, FaRegWindowClose } from "react-icons/fa";

function Verify() {

    const {formData}=useContext(AppContext);
    const storedImage = localStorage.getItem('uploadedImage');
    const [menuOpen, setMenuOpen] = useState(false);
    function togglehandler(){
      setMenuOpen(!menuOpen);
    }

    useEffect((event)=>{
      togglehandler(event)
    },[])


    return(
        <div className="flex flex-col w-full m-auto">
            
            <div className="flex flex-row  outline outline-slate-300 outline-1 items-center justify-between px-5">
                <div className="flex lg:flex-row flex-col">
                <img src={logo1} alt="logo" className="w-32 h-20 my-2 mx-4"/>
                <ul className="lg:flex lg:flex-row gap-6 items-center hidden">
                    <li>Inspiration</li>
                    <li>Find Work</li>
                    <li>Learn Design</li>
                    <li>Go Pro</li>
                    <li>Hire Designers</li>
                </ul>
                </div>
                
                <div className="flex flex-row  gap-5 items-center">
                    <div className=" md:flex flex-row gap-2 bg-slate-200 rounded-lg px-2 py-2 items-center hidden">
                        <FaSearch className=" opacity-25"/>
                        <input type="text" placeholder="Search"  className="bg-slate-200 w-4/12"/>
                    </div>
                    <TbShoppingBagX className=" md:flex w-7 h-7 opacity-35 hidden"/>
                    <div className=" w-12 h-12 rounded-full items-center">
                        <img src={`data:image/png;base64,${storedImage}`} className="w-12 h-12 object-cover rounded-full"/></div>
                    <button className="text-white bg-pink-500 rounded-md p-2 w-24 text-sm m-auto">Upload</button>
                </div>
                <div className=" lg:hidden block">
                <button onClick={togglehandler}>
                {
                  !menuOpen? (
                    <FaAlignJustify/>
                  ):(
                    <FaRegWindowClose/>
                  )
                }
              </button></div>
              
            </div>
            {
                menuOpen &&
                 <div className=" lg:hidden flex flex-col items-start w-full px-10 h-40 p-2 outline outline-slate-200 outline-1">
                {
                 list2.map((item,i)=>(
                 <div className="w-full h-12 " key={i}>
                  <h3 className=" hover:underline text-slate-600 text-sm">{item.menu}</h3>
                 </div>
                 ))
                }
                </div>
              }

            <div className="flex flex-col md:w-5/12 w-8/12 m-auto text-center gap-4 mt-8 mb-20">
                <h1 className="md:text-3xl text-2xl font-semibold mt-12 mb-6">Please verify your email...</h1>
                <img src={email} alt="icon" className="w-32 m-auto"/>
                <p className=" text-slate-500 md:text-lg text-sm">Please verify your email address. We've sent a confirmation email to:</p>
                <p className=" font-semibold">{formData.email}</p>
                <p className=" text-slate-500 md:text-lg text-sm">Click the confirmation link in that email to begin using Dribbble.</p>
                <p className=" text-slate-500 md:text-lg text-sm">Didn't recieve the email? Check your spam folder, it may have been caught by a filter. If 
                    you still don't see it, you can <span className=" text-pink-500 font-semibold">resend the confirmation email</span>.
                </p>
                <p className=" text-slate-500 md:text-lg text-sm">Wrong email address? <span className=" text-pink-500 font-semibold">Change it.</span></p>
            </div>

            <div className=" flex lg:flex-row flex-col bg-slate-100 px-16 py-20 gap-10">
                <div className="flex flex-col lg:w-4/12 w-10/12">
                    <img src={logo2} alt="logo" className="w-20 h-16"/>
                    <p>Dribbble is the world's leading community for creatives to share, grow and get hired.</p>
                    <div className="flex flex-row gap-5 my-6">
                        <FaDribbble />
                        <FaTwitter/>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaPinterest/>
                    </div>
                </div>
                <div className="flex flex-col lg:w-3/12 w-full">
                    <p className=" font-semibold py-2">For designers</p>
                    <ul className="flex flex-col gap-2">
                    {
                       list.map((item,i)=>(
                       <div className="w-full h-7" key={i}>
                        <h3 className=" hover:underline text-sm py-2">{item.menu}</h3>
                       </div>
                        ))
                    }
                    </ul>
                </div>
                <div className="flex flex-col lg:w-3/12 w-full">
                    <p className=" font-semibold py-2">For designers</p>
                    <ul className="flex flex-col gap-2">
                    {
                       list.map((item,i)=>(
                       <div className="w-full h-7" key={i}>
                        <h3 className=" hover:underline text-sm py-2">{item.menu}</h3>
                       </div>
                        ))
                    }
                    </ul>
                </div>
                <div className="flex flex-col lg:w-3/12 w-full ">
                    <p className=" font-semibold py-2">For designers</p>
                    <ul className="flex flex-col gap-2">
                    {
                       list.map((item,i)=>(
                       <div className="w-full h-7" key={i}>
                        <h3 className=" hover:underline text-sm py-2">{item.menu}</h3>
                       </div>
                        ))
                    }
                    </ul>
                </div>
                <div className="flex flex-col lg:w-3/12 w-full ">
                    <p className=" font-semibold py-2">For designers</p>
                    <ul className="flex flex-col gap-2">
                    {
                       list.map((item,i)=>(
                       <div className="w-full h-7" key={i}>
                        <h3 className=" hover:underline text-sm py-2">{item.menu}</h3>
                       </div>
                        ))
                    }
                    </ul>
                </div>
                <div className="flex flex-col lg:w-3/12 w-full ">
                    <p className=" font-semibold py-2">For designers</p>
                    <ul className="flex flex-col gap-2">
                    {
                       list.map((item,i)=>(
                       <div className="w-full h-7" key={i}>
                        <h3 className=" hover:underline text-sm py-2">{item.menu}</h3>
                       </div>
                        ))
                    }
                    </ul>
                </div>
                
            </div>

            <div className=" bg-slate-100 flex md:flex-row flex-col w-full md:text-lg text-sm 
            md:px-16 px-6 py-12 justify-between outline outline-slate-300 outline-1">
                <p className="md:py-0 py-6">@2023 Dribbble. All rights reserved.</p>
                <div className="flex flex-row gap-2 items-center">
                    <p>20,501,853 shots dribbbled</p>
                    <img src={ball} alt="icon" className="w-8 h-7"/>
                </div>
            </div>
        
        </div>
    )
}
export default Verify