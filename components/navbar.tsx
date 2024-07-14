import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className="p-5 m-5 font-34 border rounded-2xl">
      <h1 className="text-center  m-4 font-bold text-red-400 text-7xl rounded-2xl">Let's Flash Cards</h1>

      <div className="ml-auto flex justify-between">
        <Link href='/' className='border rounded-xl text-4xl p-3 mx-4 my-2 inline-block'>Home</Link>
        <Link href='/login' className='border rounded-xl text-4xl p-3 mx-4 my-2 inline-block'>Login</Link>
      </div>

    </div>
  );
}

export default Navbar;
