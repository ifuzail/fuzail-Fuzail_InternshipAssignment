import { CiSearch } from "react-icons/ci"; 
import Link from "next/link";
import { navlinks } from "@/constants";

export const Navbar = () => {
  return (
    <nav className="navbar-component flex justify-center gap-10 items-center">
       <div className="p-2 flex flex-row items-center relative ">
         <input className="p-2 rounded-xl"/>
         <CiSearch className="w-6 h-6 absolute left-5"/>
       </div>
       <div>
          <ul className="flex flex-row space-x-10 text-sm text-white font-light">
            {navlinks.map((link) => (
                <li key={link.navId}>
                    <Link href={link.href}>
                        {link.label}
                    </Link>
                </li>
            ))}
          </ul>
       </div>
    </nav>
  )
}
