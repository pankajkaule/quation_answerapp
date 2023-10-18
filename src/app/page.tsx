"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../utils/data";
import Modal from "./components/Modal";
export default function Home() {
  const [categories, setCategories] = useState<any>(["Loading..."]);
  const [modalvalue, setModalvalue] = useState(false)

  useEffect(() => {
    async function fetchCategory() {
      const data = await (
        await fetch("http://localhost:3000/api/category", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
      ).json();
      console.log(data);
      setCategories(data);
    }
    fetchCategory();
  }, [modalvalue]);


  console.log(categories);
  const toggleModal=()=>{
    setModalvalue(!modalvalue)
  }
  return (
    <>
      <div className="w-full justify-around flex bg-orange-500 items-center h-[64px]">
        <div>Appname</div>

        <div  onClick={()=>setModalvalue(true)} className=" px-4 cursor-pointer  py-2 rounded-lg capitalize bg-neutral-800">Add New Category</div>
      <Modal modal1={modalvalue} changeModal={toggleModal}/>
      </div>
      <div className="flex  justify-center  ">
        <div className=" rounded-2xl my-5 flex   bg-white  lg:max-w-lg">
          <div className="p-5">
          {categories.map((category: any, index: number) => (
            <Link href={`/questions-answers/${category}`}>
              <div
                className={`${
                  index % 2 === 0 ? "bg-gray-500" : "bg-gray-800"
                } p-5 rounded-lg uppercase  my-2 mx-1`}
              >
                {category}
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
