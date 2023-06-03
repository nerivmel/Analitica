import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import imagen from '../images/logo_udea.png';

function PrivNavBar() {
    const [navbar, setNavbar] = useState(false);
    const handleLogout = () => {
      localStorage.setItem("logueado", "false")
      window.location.href = "/"
    }
    

    return (
      <div className='header'>
        <div className='logo'>
          <a href="..">
            <Image className='img' src={imagen} />
          </a>
          <h2 className='tittle'>Analítica</h2>
        </div>
        <nav className="nav w-full bg-green-800 top-0 left-0 right-0">
            <div className="header-buttons">
              {/* LOGO */}
              <div className='header-button px-5'>
                <Link href="/" className='flex-auto'>
                  <h3 className="titulo-header">Inicio</h3>
                </Link>
              </div>
              <div className='header-button'>
                <Link href="/graficos" className='flex-auto'>
                  <h3 className="titulo-header">Gráficos</h3>
                </Link>
              </div>
              <div className='header-button'>
                <Link href="/signin" className='flex-auto'>
                  <h3 className="titulo-header">Registrar usuarios</h3>
                </Link>
              </div>
              <div className='header-button'>
                <Link href="/dragdrop" className='flex-auto'>
                  <h3 className="titulo-header">Subir Archivos</h3>
                </Link>
              </div>
              <div className='header-button l'>
                <h3 className="titulo-header" onClick={handleLogout}>Logout</h3>
              </div>
              
            </div>
  
        </nav >
      </div >
    );
  }
  
  export default PrivNavBar;