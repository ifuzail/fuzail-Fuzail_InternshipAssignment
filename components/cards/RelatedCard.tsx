import { RelatedCards } from "@/constants"
import Image from "next/image"

const RelatedCard = () => {
  return (
    <div className="flex flex-row p-5 w-full overflow-x-auto whitespace-nowrap scroll scrollbar-hide">
        {RelatedCards.map((card) => (
            <div key={card.id} className="p-3 inline-block whitespace-normal">
                <Image
                 src={card.imageUrl}
                 alt="related card image "
                 width={300}
                 height={300}
                 className="p-5"
                />
                <div className="flex flex-row gap-2 items-center">
                    <span className="bg-blue-100 text-[#074786] px-2 py-1  rounded-lg ">{card.discount}</span>
                    <span className="bg-blue-100 text-[#074786] px-2 py-1  rounded-lg">Limited time</span>
                </div>
                <h1 className="font-bold text-center text-[#626E79] text-lg mt-2">{card.label}</h1>
                <p className="text-[#626E79] text-lg mt-2 mb-2">{card.description}</p>
                <div className="flex flex-row ">
                   <p className="text-2xl text-[#626E79]">{card.discountedPrice}</p>
                   <span className="flex flex-row p-3 gap-2">
                    <p className="text-[#9FA9B3]">{card.originalprice}</p>
                    <p className="text-red-500">({card.discount})</p>
                   </span>
                </div>
                <button className="w-full text-center bg-blue-600 py-2 px-4 rounded-lg text-white hover:bg-blue-700">
                    View Deal
                </button>
            </div>
        ))}
    </div>
  )
}
export default RelatedCard