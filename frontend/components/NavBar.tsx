import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import imagen from '../images/logo_udea.png';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='header'>
      <div className='logo'>
        <Image className='img' src={imagen}/>
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
              <Link href="/login" className='flex-auto'>
                <h3 className="titulo-header">LogIn</h3>
              </Link>
            </div>
            <div className='header-button'>
              <Link href="/signin" className='flex-auto'>
                <h3 className="titulo-header">SignIn</h3>
              </Link>
            </div>
            <div className='header-button'>
              <Link href="/logout" className='flex-auto'>
                <h3 className="titulo-header">LogOut</h3>
              </Link>
            </div>
            
          </div>

      </nav >
    </div >
  );
}

export default NavBar;
