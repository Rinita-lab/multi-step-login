import React, { useState, useEffect } from "react"
import logo2 from "../assets/logo2.png"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaCamera } from "react-icons/fa";


function Profile() {

    const {formData, handlePagePrev,nextPageHandler,changeHandler, imageHandler, imageData, setImageData}=useContext(AppContext);
    const storedImage = localStorage.getItem('uploadedImage');
    
    return(
    <div className="flex flex-col md:w-10/12 md:p-0 w-full p-4 m-auto ">
        <img src={logo2} alt="logo" className="sm:w-32 sm:h-28 w-24 h-20 my-3"/>
        <h1 className=" font-bold md:text-4xl text-2xl lg:w-6/12 md:w-7/12 w-10/12 m-auto py-4 lg:text-start text-center">Welcome! Let's create your profile</h1>
        <p className=" font-normal text-sm md:w-6/12 w-9/12 m-auto text-slate-500 lg:py-0 py-5 lg:text-start text-center">
            Let others get to know you better! You can do these later</p>
        <div className="flex lg:flex-row flex-col lg:w-7/12 w-11/12 m-auto md:gap-10 gap-3 justify-between items-center px-5">
            <div className="flex flex-col lg:w-6/12 my-8 gap-10 md:mx-10 mx-0">
                <h2 className="font-bold text-lg lg:text-start text-center">Add an avatar</h2>
                <div className=" outline-dashed outline-2 outline-slate-400 outline-offset-2 
                rounded-full flex flex-col justify-center items-center w-52 h-52 ">
                    {
                       storedImage &&
                        <div>
                            <img src={`data:image/png;base64,${storedImage}`} className=" w-52 h-52 object-cover rounded-full"/>
                        </div>
                    }
                    {
                        storedImage===null &&
                        <div>
                        <FaCamera className="w-6 h-6 cursor-pointer p-16" />
                        </div>
                    }
                    
                </div>
            </div>
            <div className="flex flex-col lg:w-6/12 md:w-10/12 w-full lg:h-full h-32 my-8 mx-auto">
                
                <input type="file" accept="image/*" onChange={imageHandler} className="lg:px-2 px-0"/>
                    
                <p className="text-slate-500 py-1 lg:m-4 m-2">Or choose one of our defaults</p>
            </div>
        </div>
        <div className="flex flex-col justify-start items-start lg:mb-20 mb-12">
          <h2 className="lg:w-6/12 md:w-9/12 w-10/12 m-auto font-bold text-lg p-2">Add your location</h2>
          <input type="text" placeholder="Enter a location" className="lg:w-6/12 md:w-9/12 w-10/12 m-auto border-b-2 border-slate-200 p-2" 
          name="location" id="location" value={formData.location} onChange={changeHandler}/>
          <button className=" bg-pink-400 md:w-3/12 w-5/12 lg:px-8 px-3 py-2 text-white rounded-md text-lg lg:mx-80 md:mx-24 mx-auto mt-10"
          onClick={nextPageHandler}>Next</button>
          <p className="text-slate-500 lg:mx-80 md:mx-24 mx-auto mt-2 text-xs">
            or press <span onClick={handlePagePrev} className=" cursor-pointer">RETURN</span></p>
        </div>
    </div>
    )
}
export default Profile