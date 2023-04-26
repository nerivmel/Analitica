
import NavBar from "@/components/NavBar";
import React, { useState } from 'react'
import axios from 'axios';
import { HandleSubmit } from "@/functions/handleSubmit";

const login = () => {

  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleLogin = new HandleSubmit(credentials)
  
  const handleSubmit = async (e: any) => {
    {/*ESTO ENVÍA LOS DATOS DE LOGIN AL BACK END*/ }
    handleLogin.handleLogin(e)
  }

  return (
    <div className="formulario">
      <NavBar/>
      <form className="form" onSubmit={handleSubmit}>
        <p className="p">*Correo</p>
        <input className="logsin-button" name="username" type="username" onChange={handleChange}></input>
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
export default login