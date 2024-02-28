import { BiCheckCircle } from "react-icons/bi"
import { IoInformationCircleOutline } from "react-icons/io5"
import { MdArrowDropDown } from "react-icons/md"

const PageStats = () => {
  return (
   <div className="p-3 flex flex-row gap-4 justify-between item-center w-full ">
    <div className="flex flex-row gap-5 items-center">
      <div className="flex flex-row gap-1 items-center ">
        <BiCheckCircle className="w-6 h-6"/>
        <p className="md:text-base text-xs">Last Updated - Februry 22,2020 </p>
      </div>
      <div className="flex flex-row gap-1 items-center ">
        <IoInformationCircleOutline className="w-6 h-6"/>
        <p className="md:text-base text-xs">Advertising Disclosure</p>
      </div>
    </div>
     <div className="flex flex-row gap-2 items-center">
      <p className="md:text-base text-xs">Top Relevant</p>
      <MdArrowDropDown />
     </div>
   </div>
  )
}
export default PageStats