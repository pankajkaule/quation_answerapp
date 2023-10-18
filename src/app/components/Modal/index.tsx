"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useState, useEffect } from "react";

const Modal = (props: any) => {
  console.log(props);
  const router = useRouter();
  const [category, setCategory] = useState("");
  const addCategory = async () => {
    if (category !== "") {
      try {
        const response = await fetch("http://localhost:3000/api/category", {
          method: "POST",
          body: JSON.stringify({ category_name: category }),
        });
        const data = await response.json();
        props.changeModal();
      } catch (error) {}
    } else {
      alert("category cant be empty");
    }
  };

  return (
    <div
      id="popup-modal"
      className={`${
        props.modal1 ? "block" : "hidden"
      } fixed flex items-center  justify-center z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => props.changeModal()}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-left">
            <form className="space-y-6" action="#">
              <div>
                <label className="block mb-2 text-2xl capitalize  font-semibold text-gray-900 dark:text-white">
                  category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </form>
            <button
              onClick={addCategory}
              data-modal-hide="popup-modal"
              type="button"
              className="text-white mt-5 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
