import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import imagen from '../images/logo_udea.png';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
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
            <div className='header-button'>
              <Link href="/" className='flex-auto'>
                <h3 className="titulo-header">Inicio</h3>
              </Link>
            </div>
            <div className='header-button'>
              <Link href="/login" className='flex-auto'>
                <h3 className="titulo-header">Login</h3>
              </Link>
            </div>
            <div className='header-button'>
              <Link href="/graficos" className='flex-auto'>
                <h3 className="titulo-header">Gráficos</h3>
              </Link>
            </div>
            
          </div>

      </nav >
    </div >
  );
}

export default NavBar;

