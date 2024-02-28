import { footerDetails } from "@/constants"
import { MdArrowDropDown } from "react-icons/md"

const Footer = () => {
  return (
    <div className="bg-[#212731] text-[#B6BDC4] h-72 p-5">
        {footerDetails.map((item) => (
            <div className="flex flex-row justify-around items-start">
                <div className="p-4 flex flex-col gap-3">
                    <h1 className="uppercase text-white md:text-xl text-lg">Categories</h1>
                    {item.categories.map((category) => (
                        <ul  key={category.id}>
                            <li className="md:text-base text-sm">
                                {category.label}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="p-4 flex flex-col gap-3">
                <h1 className="uppercase text-white md:text-xl text-lg">Contact</h1>
                    {item.contacts.map((contact) => (
                        <ul key={contact.id}>
                            <li className="md:text-base text-sm">{contact.label}</li>
                        </ul>
                    ))}
                </div>
                <div className="mt-20 ">
                    <p className="md:flex hidden flex-row gap-3 items-center">United States <MdArrowDropDown /></p>
                </div>
            </div>
        ))}
    </div>
  )
}
export default Footer