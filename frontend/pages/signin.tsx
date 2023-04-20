
import NavBar from "@/components/NavBar";
import React, { useState } from 'react'
import axios from 'axios'
import { HandleSubmit } from "@/functions/handleSubmit";

const signin = () => {
  
  

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSignin = new HandleSubmit(credentials)

  const handleSubmit = async (e:any) => {
    handleSignin.handleSignin(e)
  };
  

  return (
    <div>
      <NavBar/>
      <p>hola mundo</p>
      <form className="flex flex-col place-items-center gap-2" onSubmit={handleSubmit}>
        <input name="name" type="name" placeholder="nombre" onChange={handleChange}></input>
        <input name="email" type="email" placeholder="correo" onChange={handleChange}></input>
        <input name="password" type="password" placeholder="contraseña" onChange={handleChange}></input>
        <div className='flex justify-center gap-3 m-4'>
          <button type='submit' className='primary-button'>Enviar datos</button>
          <button type='reset' className='secondary-button'>Limpiar datos</button>
        </div>
      </form>
    </div>
  )
}
export default signin