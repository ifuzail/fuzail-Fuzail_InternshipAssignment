import Card from "@/components/cards/Card";
import PageStats from "@/components/PageStats";
import Pagination from "@/components/Pagination";
import RelatedCard from "@/components/cards/RelatedCard";
import { submenu1 } from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex justify-start items-start flex-col p-5">
      <h1 className="md:text-5xl text-3xl p-5 text-[#2C384A]">
        Best Website builders in the US
      </h1>
      <hr className="h-0.5 w-full bg-stone-400" />
      <PageStats />
      <hr className="h-0.5 w-full bg-stone-400" />
      <div className="flex flex-row flex-wrap md:gap-10 md:p-5 p-2">
        {submenu1.map((item) => (
          <ul key={item.id}>
            <Link href={item.href}>
              <li className="p-2 hover:text-blue-800 md:text-base text-sm">
                {item.label}
              </li>
            </Link>
          </ul>
        ))}
      </div>
      <Pagination />
      <Card />
      <h2 className="md:text-3xl mt-4  text-lg">
        Related deals you might like for
      </h2>
      <RelatedCard />
      <div className="flex flex-row justify-between w-full items-center">
        <h2 className="md:text-4xl text-2xl mt-10 text-[#5C6874] flex flex-col md:gap-2">
          Sign up and get exclusive <span>special deals</span>
        </h2>
        <button className="bg-blue-600 w-24 h-12 text-white rounded-r-lg">
          Sign Up
        </button>
      </div>
    </main>
  );
};
export default page;
