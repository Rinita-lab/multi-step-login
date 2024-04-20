import { useState, createContext, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { toast } from "react-hot-toast";

export const AppContext= createContext();

export default function AppContextProvider({children}){
    //form data-signup
    const[formData, setFormData]=useState({
        name:"",
        username:"",
        email:"",
        password:"",
        ischecked:false,
        options:"",
        location:""
    });


    //updating localstorage
    const [formValues, setFormValues] = useState([]);
    useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValues));
      }, [formValues]);
    //capturing changes in data
    function changeHandler(e){
        const {name,value,checked,type}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:type==="checkbox"? checked:value
        }))
    }
    //signup form submission
    function submitHandler(e){
        e.preventDefault();
        if(formData.name!=="" && formData.username!=="" && formData.email!=="" && formData.password!=="" && formData.ischecked===true){
            if(formData.password.length>6){
                console.log("Printing final form data...");
                console.log(formData);
                navigate("/profile")
                toast.success("Registered Successfully")
                setFormValues((prevFormValues) => [...prevFormValues, formData]);
            }
            else{
                toast.error("Password should be more that 6 characters")
                navigate("/")
            }
            
        }else{
            toast.error("Please Enter all the required details")
            navigate("/")
        }
        
    }

    const navigate=useNavigate();

    function handlePagePrev(){
        navigate(-1);
    }



    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const storedImage = localStorage.getItem('uploadedImage');
        if (storedImage) {
          setImageData(storedImage);
        }
    }, []);

    const imageHandler = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setImageData(base64String);
        localStorage.setItem('uploadedImage', base64String);
        };
        

        if (file) {
        reader.readAsDataURL(file);
        }
    }
    
    //profile form submission
    function nextPageHandler(e){
        e.preventDefault();
        if(formData.location!==""){
            console.log("printing after location added...")
            console.log(formData);
            if(imageData!==""){
                navigate("/user")
                toast.success("Details Added");
                setFormValues((prevFormValues) => [...prevFormValues, formData]);
                
            }
            else{
                navigate("/profile")
                toast.error("Choose your Avatar")
            } 
        }
        
        else{
            navigate("/profile")
            toast.error("Please enter your address")
        }
        
    }

    //user form submission
    function optionHandler(e){
        e.preventDefault();
        if(formData.options!==""){
            console.log("printing after option selected...")
            console.log(formData);
            navigate("/verify")
            toast.success("Choice Added")
            setFormValues((prevFormValues) => [...prevFormValues, formData]);
        }
        else{
            navigate("/user")
            toast.error("Please select any one of the options")
        }
        
    }

    const value={formData, setFormData, changeHandler, submitHandler, handlePagePrev, nextPageHandler, optionHandler, imageHandler,imageData, setImageData}
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
