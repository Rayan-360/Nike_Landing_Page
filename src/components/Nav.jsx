import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
               <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a className="font-montserrat text-lg text-slate-gray"  href={item.href}  >{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="max-lg:block hidden">
                <img src={hamburger} alt="" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav