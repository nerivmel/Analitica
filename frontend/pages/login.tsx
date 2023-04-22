
import NavBar from "@/components/NavBar";
import { useState } from "react";
import React from 'react'
import axios from 'axios';

const login = () => {

  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });


  const handleSubmit = async (e: any) => {
    {/*ESTO ENVÍA LOS DATOS DE LOGIN AL BACK END*/ }
    e.preventDefault();
    console.log(credentials)
    const res = await instance.post("auth/login/", credentials).then((res) => {
      instance.defaults.headers.post['access_token'] = `${res.data.token_type} ${res.data.access_token}`
    }).catch((e) => { console.log(e) });
    console.log(instance.defaults.headers)
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