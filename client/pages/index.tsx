import type { NextPage } from "next";
import { PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex text-white absolute top-0 bottom-0 right-0 left-0 w-full h-full">
      <aside className="w-64 p-2 bg-[#202123]">
        <div className="p-3 border-[1px] border-gray-600 rounded-md flex items-center hover:bg-neutral-700 ease-in">
          <PlusIcon className="w-4 h-4" />
          <p className="pl-2 text-sm">New chat</p>
        </div>
      </aside>
      <section className="flex-1 bg-[#343541] relative">
        <div className="text-left">
          <div className="">
            <div className="p-3 px-6 mx-auto max-w-4xl flex">
              <div className="w-10 h-10 bg-white rounded-md"></div>
              <div className="px-10">Hello World</div>
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="bg-[#444654]">
            <div className="p-3 px-6 mx-auto max-w-4xl flex">
              <div className="w-10 h-10 bg-[#0da37f] rounded-md">
                <Image src="./logo.svg" alt="" width={40} height={40} />
              </div>
              <div className="px-10">bots will rule</div>
            </div>
          </div>
        </div>
        <div className="p-3 flex justify-center absolute bottom-0 right-0 left-0">
          <textarea
            rows={1}
            className="bg-[#40414f] p-3 rounded-md w-4/5 m-3 outline-none shadow-md"
          ></textarea>
        </div>
      </section>
    </div>
  );
};

export default Home;
