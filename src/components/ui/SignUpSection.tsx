import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
 import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.ts";
import logo from '../../assets/logo.svg';

const schema=yup.object().shape({
    username: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
  });

interface SignUpData{
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}

const SignUpSection:React.FC =()=>
{
  const navigate = useNavigate();
  const {subscribe,login} = useAuth();
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

  const [typeConfirm, setTypeConfirm]=useState('password');
  const [iconConfirm, setIconConfirm]=useState(eyeOff);


  const handleConfirmToggle=()=>{    
    if(typeConfirm==='password'){
      setIconConfirm(eye);      
      setTypeConfirm('text');
    }
    else{
      setIconConfirm(eyeOff);     
      setTypeConfirm('password');
    }
  }


  const {register , handleSubmit , formState: { errors },} = useForm({
     resolver : yupResolver(schema),
  });

   const  submitForm =async (data:SignUpData)=>{
    try {
      const response = await subscribe(data.username,data.firstName,data.lastName,data.email,data.password);
      if(response.status === 200){
        await login(data.username,data.password);
        navigate('/test');
      }else{
        console.log(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return(
     <div className="relative w-full lg:w-[900px] h-fit lg:h-screen pt-4 pb-2 px-8 bg-white flex flex-col">
         <div className="bg-[#0671E0] absolute left-0 top-0 h-full w-1"></div>
         <div className="flex items-center mb-4">
         <img src={logo} alt="Logo" className="mr-4" />
         <div className="text-3xl font-medium ">Bienvenue</div>
      </div>

      <form className="flex flex-col w-full h-[800px] md:px-8 items-center justify-center gap-2.5" onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col justify-center w-full">
             <label className="block ml-2 text-md font-light ">Username</label>
             <input className="mt-1 border rounded-[10px] border-blue-700 w-full p-2 bg-[#EEF5FC] " {...register("username")} />
             <p className="text-red-600 ">{errors.username?.message}</p>
          </div>

          <div className="flex flex-col justify-center w-full">
              <label className="block ml-2 text-md font-light ">First Name</label>
              <input className="mt-1 border rounded-[10px] border-blue-700 w-full p-2 bg-[#EEF5FC] " {...register("firstName")} />
              <p className="text-red-600 ">{errors.firstName?.message}</p>
          </div>


          <div className="flex flex-col justify-center w-full">
              <label className="block ml-2 text-md font-light ">Last Name</label>
              <input className="mt-1 border rounded-[10px] border-blue-700 w-full p-2 bg-[#EEF5FC] "{...register("lastName")} />
              <p className="text-red-600 ">{errors.lastName?.message}</p>
          </div>

          <div className="flex flex-col justify-center w-full">
              <label className="block ml-2 text-md font-light ">Email</label>
              <input className="mt-1 border rounded-[10px] border-blue-700 w-full p-2 bg-[#EEF5FC] "{...register("email")} />
              <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="flex gap-2 w-full">
              <div className="flex flex-col justify-center w-full">
                  <label className="block ml-2 text-md font-light ">Password</label>
                  <div className="relative">
                  <input className="mt-1 border rounded-[10px] border-blue-700 w-full p-2  bg-[#EEF5FC] " type={type} {...register("password")} />
                  <span  className="absolute right-0 flex items-center pr-3 cursor-pointer top-3" onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                  </div>
                  <p className="text-red-600 ">{errors.password?.message}</p>
              </div>


              <div className="flex flex-col justify-center w-full">
                  <label className="block ml-2 text-md font-light ">Confirm Password</label>
                  <div className="relative">
                  <input className="mt-1 border rounded-[10px] border-blue-700 w-full p-2 bg-[#EEF5FC] "  type={typeConfirm}   {...register("confirmPassword")} />
                  <span  className="absolute right-0 flex items-center pr-3 cursor-pointer top-3 "  onClick={handleConfirmToggle}><Icon icon={iconConfirm} size={20} /></span>
                  </div>
                  <p className="text-red-600 ">{errors.confirmPassword?.message}</p>
              </div>
          </div>
          <button type="submit" className="border rounded-[10px] w-full p-2 mt-4 bg-[#0671E0] text-white text-xl hover:bg-[#0663C7] focus:bg-[#0663C7]">Sign Up</button>
      </form>
         <div className="flex w-full whitespace-nowrap justify-center gap-2 mt-auto">
            <p className="text-center font-medium text-sm">Vous avez déjà un compte ?</p>
             <span className="text-blue-700 font-medium text-sm cursor-pointer">Connectez-vous maintenant?</span>
         </div>
     </div>
     
  )
}
export default SignUpSection;