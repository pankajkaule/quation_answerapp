"use client";
import react, { useState, useEffect } from "react";
export default function QuationsAnswers() {
  const [categories, setCategories] = useState<any>([
    {
      quation: "Quation Loading...",
      option1: "option1 Loading...",
      option2: "option2 Loading...",
      option3: "option3 Loading...",
      option4: "option4 Loading",
    },
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchCategory() {
      const data = await (
        await fetch("http://localhost:3000/api/getQuestion", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ category_name: "category1" }),
        })
      ).json();
console.log(data.data)
      setCategories([...data.data]);
    }
    fetchCategory();
  }, []);

  const [setselectedAns, setSetselectedAns] = useState("")
  const goToNext=()=>{
    
    index < categories.length-1?setIndex(index+1):alert( index+" you are at the end");
  }

  const goToPrev=()=>{
    
    index ===0?alert( index+" you are at the beginning"):setIndex(index-1);
  }

  const submitAnswer =()=>{

  }
  return (
    <div className=" bg-gray-800">
      <div className="flex min-h-screen ">
        <div className="min-w-[300px] py-8 p-4 text-center bg-black">
          <div className="py-10 text-[25px] capitalize">Questions</div> 
          <div className="grid grid-cols-4 gap-4 py-5">
           {categories.map((category:any,index1:number)=>
           <div onClick={()=>setIndex(index1)} className="p-2 cursor-pointer flex justify-center items-center rounded-md bg-red-700">{index1+1}</div>
           )}
          </div>
        </div>
        <div className="w-full">
            <div className="flex justify-end ">

              <div className="m-2 rounded-lg p-4 bg-red-700">Submit Test</div>
            </div>

      <div className="flex p-5 justify-around items-center"> 
      <div><h1 className="uppercase">testname</h1></div>
      </div>
      <div className="">
        <div>
         <h2 className="m-0 px-[5%] pl-[9%]">{index+1}.&ensp; {categories[index].quation}</h2>
        </div>

        <ul className="grid  gap-6 px-[4%] md:grid-cols-1">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full  text-lg font-semibold">
                  {categories[index].option1}
                </div>
              </div>
            </label>
          </li>
          
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {categories[index].option2}
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {categories[index].option3}
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {categories[index].option4}
                </div>
              </div>
            </label>
          </li>
        </ul>
        <div className="flex pt-10 justify-around">
          <div onClick={goToPrev} className={`${index !== 0 ? "bg-green-700":"bg-gray-400" }  px-10 py-4 rounded-lg`}>Prev</div>
          <div onClick={submitAnswer} className="bg-green-700 px-10 py-4 rounded-lg">Submit</div>
          <div className={`${index < categories.length-1? "bg-green-700":"bg-gray-400" } px-10 py-4 rounded-lg`} onClick={goToNext}>Next</div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
