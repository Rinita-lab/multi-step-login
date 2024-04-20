import React, { useState } from "react"
import form from "../assets/form-img.png"
import logo1 from "../assets/logo1.png"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


function Signup() {
    const {formData,changeHandler,submitHandler}=useContext(AppContext);
    
    
    return(
    <div className="flex lg:flex-row md:flex-col flex-col justify-center w-full h-full">
        <div className="bg-[#fed7aa] lg:w-5/12 md:w-full md:px-40 w-full lg:p-12 p-16 h-full">
            <img src={logo1} alt="logo" className="w-40 h-28 opacity-50 "/>
            <h1 className="font-mono font-bold lg:w-9/12 md:w-10/12 sm:text-4xl text-2xl text-[#d97706]">Discover the world's top Designers & Creatives.</h1>
            <img src={form} alt="img" className="w-full h-full m-auto"/>
            <p className="text-[#d97706] ">Art by <span className=" underline underline-offset-2">Peter Tarka</span></p>
        </div>

        <div className="flex flex-col justify-center items-start bg-white lg:w-7/12 w-full ">
            <p className="p-4 lg:absolute top-0 right-3"> Already a 
            member? <span className=" text-blue-500 underline underline-offset-2">Sign In</span></p>
            <h1 className="font-mono font-bold lg:text-3xl md:text-3xl sm:text-2xl text-2xl 
            lg:px-0 px-12 lg:pt-6 pt-16 lg:my-6 my-auto mx-auto">Sign up to Dribbble</h1>
            <form className="flex flex-col lg:w-8/12 md:w-8/12 w-full text-start mx-auto lg:mt-4 mt-8 mb-2 lg:px-0 md:px-16 px-12 lg:py-0 py-2 gap-3 " onSubmit={submitHandler}>
                <div className="flex lg:flex-row md:flex-row md:justify-between flex-col gap-6 ">
                  <div className="flex flex-col md:w-5/12 w-full gap-2">
                    <label className="font-mono font-bold">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={changeHandler} placeholder="Enter Your Name..." 
                     className=" rounded-md p-2 bg-slate-100"/>
                  </div>

                  <div className="flex flex-col md:w-6/12 w-full gap-2">
                    <label className="font-mono font-bold">Username</label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={changeHandler} placeholder="Enter Your Username..."
                    className=" rounded-md p-2 bg-slate-100"/>
                  </div>
                </div>

                <div className="flex flex-col py-3 gap-2">
                <label className="font-mono font-bold">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={changeHandler} placeholder="Enter Your Email..."
                className=" rounded-md p-2 bg-slate-100"/>
                </div>

                <div className="flex flex-col py-3 gap-2">
                <label className="font-mono font-bold">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={changeHandler} placeholder="6+ characters"
                className=" rounded-md p-2 bg-slate-100"/></div>

                <div className="flex flex-row py-3 gap-2 my-2">
                <input type="checkbox" id="checkbox" name="ischecked" checked={formData.ischecked} onChange={changeHandler} className="w-10 h-10 mx-2"/>
                <label htmlFor="check">Creating an account means you're okay with our <span className="text-blue-700">Terms of Service, 
                    Privacy Policy,</span> and our default <span className="text-blue-700">Notification Settings.</span></label>
                </div>
                
                <button className="text-white bg-pink-500 rounded-md p-2 lg:w-5/12 sm:w-5/12 w-7/12 text-sm">
                    
                    Create Account</button>
                
                <p className=" text-xs font-light lg:w-9/12 sm:w-8/12 w-10/12 lg:mb-0 mb-10">This site is protected by reCAPTCHA and the 
                Google <span className="text-blue-700">Privacy Policy</span> and <span className="text-blue-700">Terms of Service</span> apply.</p>

            </form>
            
            
        </div>
    </div>
    )
}
export default Signup