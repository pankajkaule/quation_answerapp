"use client";
import { useState, useId } from "react";
import { addItem, addQuation } from "../../../utils/data";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AddCategory = () => {
  const [category, setcategory] = useState("");
  const id = uuid();
  const router = useRouter();

  const addCategory = () => {
    category === ""
      ? alert("Please Enter Category Name")
      : addItem({ id, category }),
      router.push("/");
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-around p-2 bg-green-500">
        <div>AddCategory</div>

        <div>
          <Link href={"/"}>
            <div>home</div>
          </Link>
        </div>
      </div>
      <div className=" flex justify-center  w-full  ">
        <div className="w-full lg:max-w-lg   ">
      <div className="p-4 m-4 rounded-lg  flex flex-col justify-center bg-orange-300 ">
        <div className="py-2">Enter category</div>
        <input
          type="text"
          className="text-black p-2 rounded-md focus:border-none "
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          placeholder="category"
        />
        <div className="flex justify-center">
          {" "}
          <div
            className="my-8 w-[200px] text-center p-2 bg-orange-700 rounded-md"
            onClick={addCategory}
          >
            Add Category{" "}
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default AddCategory;
