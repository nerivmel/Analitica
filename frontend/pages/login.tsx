
import NavBar from "@/components/NavBar";
import React, { useState } from 'react'
import axios from 'axios';
import { HandleSubmit } from "@/functions/handleSubmit";
import { error } from "console";
import { Hash } from "crypto";
import Router, { useRouter } from "next/router";

const login = () => {

  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const [logueado, setLogueado] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()


  const handleSubmit = async (e: any) => {
    //{/*ESTO ENVÍA LOS DATOS DE LOGIN AL BACK END*/ }
    
    e.preventDefault()
    fetch("http://localhost:4000/admin/login", {
      method:"POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(credentials)
      }).then((data)=>{
        console.log(data)
        if(data.status == 201){
          setLogueado(true);
          localStorage.setItem("logueado", "true");
          router.push('/')
        }
        if(data.status == 404){
          setError(true);
        }
    }).catch((error)=>console.log(error))
    
  }

  return (
    <div className="formulario">
      <NavBar/>
      
      <form className="form" onSubmit={handleSubmit}>
        <p className="p">*Correo</p>
        <input className="logsin-button" name="email" type="email" onChange={handleChange}></input>
        <p className="p">*Contraseña</p>
        <input className="logsin-button" name="password" type="password" onChange={handleChange}></input>
        <div className='flex justify-center gap-3 m-4'>
          <button type='submit' className='primary-button' onClick={handleSubmit}>Enviar datos</button>
          <button type='reset' className='secondary-button'>Limpiar datos</button>
        </div>
      </form>
      {
        error ? <p className="error">Usuario o contraseña incorrectos</p> : null
      }
    </div>
  )
}
export default login