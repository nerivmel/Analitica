
import NavBar from "@/components/NavBar";
import { useState } from "react";
import React from 'react'
import axios from 'axios'

const signin = () => {

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(credentials)
    const res = await axios.post("http://127.0.0.1:8000/user/", credentials);
    console.log(res);
  };
  

  return (
    <div>
      <NavBar/>
      <form className="form" onSubmit={handleSubmit}>
        <p className="p">*Nombre</p>
        <input className="logsin-button" name="name" type="name" onChange={handleChange}></input>
        <p className="p">*Correo</p>
        <input className="logsin-button" name="email" type="email" onChange={handleChange}></input>
        <p className="p">*Contraseña</p>
        <input className="logsin-button" name="password" type="password" onChange={handleChange}></input>
        <div className='flex justify-center gap-3 m-4'>
          <button type='submit' className='primary-button'>Enviar datos</button>
          <button type='reset' className='secondary-button'>Limpiar datos</button>
        </div>
      </form>
    </div>
  )
}
export default signin