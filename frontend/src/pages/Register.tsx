import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form"
import InputErrorMessage from "../components/ui/InputErrorMessage";
import { REGISTER_FORM } from "../data";
import { IErrorMessage, IRegisterForm } from "../interfaces";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../validation";
import axiosInstance from "../config/axios.config";
import toast from 'react-hot-toast';
import { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
interface IFormInput {
  username: string;
  email: string;
  password: string;
}
const RegisterPage = () => {
  /* --------------------------------- States --------------------------------- */
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({resolver: yupResolver(registerSchema)})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  /* -------------------------------- Handlers -------------------------------- */
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true)
    try {
      const {status} = await axiosInstance.post("/auth/local/register", data)
      if(status === 200) {
        toast.success("You will navigate to the login page after 2 seconds.", {
          position: "bottom-center",
          duration: 2000,
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "10px",
            padding: "16px",

          }
        })
      }
      setTimeout(() => { 
        navigate("/login")
      },1500)
    } catch (error) {
      const errorObj = error as AxiosError<IErrorMessage>
      toast.error(`${errorObj.response?.data.error?.message}`, {
        position: "bottom-center",
        duration: 1500,
      })
      
    } finally {
      setIsLoading(false)
    }
  } 
  /* ---------------------------------- Renders ----------------------------------- */
  const renderRegisterForm = REGISTER_FORM.map(({name,placeholder,type,validation}: IRegisterForm, index: number) => (
    <div key={index}>
      <Input placeholder={placeholder} type={type} {...register(name,validation)} />
      {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
    </div>
  ))
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">
        Register to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        
        {renderRegisterForm}
        <Button fullWidth isLoading={isLoading}>Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
