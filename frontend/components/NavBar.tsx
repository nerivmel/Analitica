import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div >
      <nav className="w-full bg-green-800 top-0 left-0 right-0">
          <div className="flex items-center justify-between py-3 md:py-2 ali">
            {/* LOGO */}
            <div className='flex-auto px-5'>
              <Link href="/" className='flex-auto'>
                <h3 className=" text-gray-900 font-bold ">Inicio</h3>
              </Link>
            </div>
            <div className='flex-auto px-5'>
              <Link href="/login" className='flex-auto'>
                <h3 className=" text-gray-900 font-bold ">login</h3>
              </Link>
            </div>
            <div className='flex-auto px-5'>
              <Link href="/signin" className='flex-auto'>
                <h3 className=" text-gray-900 font-bold ">signin</h3>
              </Link>
            </div>
            <div className='flex-auto px-5'>
              <Link href="/logout" className='flex-auto'>
                <h3 className=" text-gray-900 font-bold ">logout</h3>
              </Link>
            </div>
            
          </div>

      </nav >
    </div >
  );
}

export default NavBar;
