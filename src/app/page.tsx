"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../utils/data";
export default function Home() {
  console.log(getItems());
  const [categories, setcategories] = useState(getItems());
  const deleteCategory = (id: any) => {
    deleteItem(id);
    setcategories(getItems());
  };

  return (
    <main className="flex flex-col ">
      <div className="h-[50px] w-full flex justify-around items-center px-2 bg-green-500">
        <div>select category</div>
        <Link href={"/category/add-category"}>
          <div>add new category</div>
        </Link>
      </div>
      <div className=" flex justify-center mx-2 ">
        <div className=" w-full lg:max-w-lg ">
          {categories.map((category: any, index: number) => (
            <div
              className={`flex  rounded-md w-full my-2 justify-between p-4 ${
                index % 2 !== 0 ? "bg-gray-500 text-white" : "bg-gray-700"
              }`}
            >
              <Link href={`/questions-answers/${category.category}`}>
                {" "}
                <div  className="uppercase">{category.category}</div>
              </Link>
              <div
                className="flex "
                onClick={() => deleteCategory(category.id)}
              >
                {" "}
                <div className="capitalize text-red-500 px-4">
                  <button>
delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
