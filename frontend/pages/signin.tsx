
import React, { useState } from 'react'
import { HandleSubmit } from "@/functions/handleSubmit";
import PrivNavBar from "@/components/PrivNavBar";
import { error } from 'console';
import { useRouter } from 'next/router';

const signin = () => {



  const [credentials, setCredentials] = useState({ documento: '', nombre: '', area: '', email: '', cargo:'', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSignin = new HandleSubmit(credentials)
  const router = useRouter()
  const [error, setError] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    fetch("http://localhost:4000/admin", {
      method:"POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(credentials)
      }).then((data)=>{
        if(data.status == 201){
          alert("Usuario administrador creado correctamente")
          router.push("/")
        } else {
          setError(true)
        }
      }).catch((error)=>console.log(error))
  }


  return (

    <div>
      <PrivNavBar />
      <form className="form" onSubmit={handleSubmit}>
      <p className="p">*Documento</p>
        <input className="logsin-button" name="documento" type="" onChange={handleChange}></input>
        <p className="p">*Nombre</p>
        <input className="logsin-button" name="nombre" type="" onChange={handleChange}></input>
        <p className="p">*Área</p>
        <input className="logsin-button" name="area" type="" onChange={handleChange}></input>
        <p className="p">*Correo</p>
        <input className="logsin-button" name="email" type="email" onChange={handleChange}></input>
        <p className="p">*Cargo</p>
        <input className="logsin-button" name="cargo" type="" onChange={handleChange}></input>
        <p className="p">*Contraseña</p>
        <input className="logsin-button" name="password" type="password" onChange={handleChange}></input>
        <div className='flex justify-center gap-3 m-4'>
          <button type='submit' className='primary-button' onClick={handleSubmit}>Enviar datos</button>
          <button type='reset' className='secondary-button'>Limpiar datos</button>
        </div>
      </form>
      {
        error ? <p className="error">Error al crear el usuario</p> : null
      }
    </div>

  )
}
export default signin