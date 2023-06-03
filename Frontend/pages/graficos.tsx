import NavBar from "@/components/NavBar";
import PrivNavBar from "@/components/PrivNavBar";
import React, { useEffect, useState } from "react";


function graficos() {
    
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false)
  useEffect(() => {
    const autenticatedUser = localStorage.getItem("logueado")
    if (autenticatedUser != null) {
      if (autenticatedUser == "false") {
        setUsuarioAutenticado(false)
      }
      else {
        setUsuarioAutenticado(true)
      }
    }
  }, [])

    return (
        <div>
            {
                usuarioAutenticado ? <PrivNavBar/> : <NavBar/>
            }
            <div className="grafico">
            {
              usuarioAutenticado ? <iframe title="Report Section" width="100%" height="950px" src="https://app.powerbi.com/view?r=eyJrIjoiMTkxZGRhNmMtNTA3Ni00NDYwLTk4MjMtYTcyMWM5Yzk1YTlmIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9"></iframe> : <iframe title="Report Section" width="100%" height="950" src="https://app.powerbi.com/view?r=eyJrIjoiNWZjNzc5NWEtZTE1Mi00YTIzLWJiYTMtMTBlZGU0NDc0ZTc5IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9"></iframe>
            }
            </div>
        </div>
    )
}

export default graficos