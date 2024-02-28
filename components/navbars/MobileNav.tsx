"use client"
import { navlinks } from "@/constants"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { BiX } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import { MdMenu } from "react-icons/md"

const MobileNav = () => {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)

    const closeMenu = () => {
        setShowMenu(false);
    }

    const onSearchClick = () => {
        router.push('/searchPage')
    }
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <nav className="navbar-component flex flex-row items-center justify-between"> 
        <div className="text-white p-4 relative">
            <button onClick={onSearchClick}>
               <CiSearch className="text-xl"/>
            </button>
        </div>
        <section className="relative">
            <div onClick={toggleMenu} className="p-4 text-white text-xl">
            {showMenu === false ? 
            <MdMenu /> : <BiX />}
            </div> 
            {showMenu && (
                <div className="bg-stone-300 w-40 h-56 p-3 absolute right-10 top-10 rounded-md">
                    <ul className="flex flex-col gap-5 text-sm text-stone-800 font-light items-start ">
                    {navlinks.map((link) => (
                        <li key={link.navId} className="hover:text-blue-500">
                            <Link href={link.href} onClick={closeMenu} >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                </div>
            )}
        </section>
    </nav>
  )
}
export default MobileNav