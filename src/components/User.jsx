import React, {useState} from "react"
import logo2 from "../assets/logo2.png"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import option1 from "../assets/option1.png"
import option2 from "../assets/option2.png"
import option3 from "../assets/option3.png"

function User() {

    const {formData,changeHandler,optionHandler,handlePagePrev}=useContext(AppContext);

    return(
    <div className="flex flex-col md:w-10/12 w-full m-auto">
        <div className="flex flex-row gap-10 items-center md:w-full w-10/12 md:m-0 m-auto">
        <img src={logo2} alt="logo" className="md:w-32 md:h-28 w-24 h-20 my-3"/>
        <button className=" bg-slate-200 px-4 h-10 rounded-lg" onClick={handlePagePrev}><p className=" text-pink-500">&lt;</p></button>
        </div>

        <div className=" w-10/12 m-auto text-center">
            <h1 className=" md:text-5xl text-3xl font-semibold mb-6">What brings you to Dribbble?</h1>
            <p className=" text-slate-500 md:w-full w-11/12 m-auto md:text-lg text-sm">Select the option that best describe you. Don't worry you can explore other options later.</p>
            <fieldset className=" flex lg:flex-row flex-col my-12 lg:gap-8 gap-5 w-10/12 m-auto lg:items-start items-center ">
                <div className=" flex flex-col lg:w-9/12 md:w-7/12 sm:w-8/12 outline outline-offset-2 outline-slate-200 rounded-lg p-4 ">
                    <img src={option1} alt="img" className="w-52 h-32 my-4 mx-auto"/>
                    <label htmlFor="Share my Work" className="pb-2">I'm looking to share my work with others</label>
                    <input type="radio" id="Share my Work" name="options" value="Share my Work" onChange={changeHandler}/>  
                </div><br/>
                <div className=" flex flex-col lg:w-9/12 md:w-7/12 sm:w-8/12 outline outline-offset-2 outline-slate-200 rounded-lg p-4">
                    <img src={option2} alt="img" className="w-52 h-32 my-4 mx-auto"/>
                    <label htmlFor="Hire designer" className="pb-2">I'm looking to hire a skilled designer</label>
                    <input type="radio" id="Hire designer" name="options" value="Hire designer" onChange={changeHandler}/>
                </div><br/>
                <div className=" flex flex-col lg:w-9/12 md:w-7/12 sm:w-8/12 outline outline-offset-2 outline-slate-200 rounded-lg p-4">
                    <img src={option3} alt="img" className="w-52 h-32 my-4 mx-auto"/>
                    <label htmlFor="Design inspiration" className="pb-2">I'm looking for a good inspiration</label>
                    <input type="radio" id="Design inspiration" name="options" value="Design inspiration" onChange={changeHandler}/>
                </div>
                
                
            </fieldset>
            <div className=" flex flex-col gap-4 md:w-5/12 w-9/12 mx-auto lg:my-auto my-16 text-center">
                <p>Anything else? You can select multiple</p>
                <button className="text-white bg-pink-500 rounded-md p-2 w-52 text-sm m-auto" onClick={optionHandler}>
                Finish</button>
                <p className="text-slate-500 text-xs">or press <span onClick={handlePagePrev} className=" cursor-pointer">
                    RETURN</span></p>
            </div>
            
        </div>
    </div>
    )
}
export default User