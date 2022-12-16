import React from 'react'
import { useSignInEmailPassword} from '@nhost/nextjs'
import Link from 'next/link'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface FormData {
  email: string;
  password: string;
}

const SignUp:React.FC = () => {

  const {signInEmailPassword, isLoading, isSuccess} = useSignInEmailPassword()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must be less than 40 characters"),
})

const {register, handleSubmit, formState: {errors},} = useForm<FormData>({
  resolver: yupResolver(validationSchema)
})

const onFormSubmit =(data: FormData) => {
  console.log("data", data )
  signInEmailPassword(data.email, data.password)
}

// if(isSuccess) {
//   return <Link to='/dashboard' replace={true} />
// }
  return (
    <div>
    <form onSubmit={handleSubmit(onFormSubmit)}>
    <div>
        <p className='text-3xl text-bold'>Sign In</p>
        <div className='flex'>
        <p className='pr-1'>New to The Move?</p> 
        <button className='text-blue-400'>Sign Up</button>
        </div>
    </div>
    <div className='flex flex-col space-y-5 pt-10'>
    <input {...register('email')} className='outline w-96 outline-gray-400 rounded hover:outline-blue-500 py-4' type='text' placeholder='Email'/>
    <input type='password' {...register('password')} className='outline w-96 outline-gray-400 rounded hover:outline-blue-500 py-4' placeholder='Password'/>
        <button className='rounded bg-blue-500 w-96 text-white h-10'>
            Continue
        </button>
    </div>

</form>
</div>
  )
}

export default SignUp