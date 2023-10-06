"use client";
import { addQuation } from "../../../../utils/data";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import ReactMarkdown from 'react-markdown';

export default function addQuations() {
  const params = useParams();
  const [quation, setQuation] = useState("");
  const [answer, setAnswer] = useState("");
  const router = useRouter();
  const id = uuid();

  const addNewQuations = () => {
    addQuation(params.category, { id, q: quation, ans: answer });
    router.back();
  };
  return (
    <div>
      <div className="flex justify-center  w-full">
        <div className="p-4 m-4 rounded-lg w-full lg:max-w-lg flex flex-col justify-center bg-orange-300 ">
            <div onClick={()=>router.back()} className="flex justify-end cursor-pointer">Go back</div>
          <h2 className="text-center">add New Quations</h2>
          <div className="py-2">Write Quation</div>
         
          <input
            type="text"
            className="text-black p-2 rounded-md focus:border-none "
            value={quation}
            onChange={(e) => setQuation(e.target.value)}
            placeholder="Quation"
          />
          <br/>
          <br/>
          
          <div>html preview</div>
          <div className="bg-white text-black rounded-md my-2 min-h-[200px] p-2">
            
            <div  className="no-tailwindcss" dangerouslySetInnerHTML={{ __html: answer }} /></div>
           
          <div className="py-2">Write Answer</div>
          <textarea
            className="text-black min-h-[200px] p-2 rounded-md focus:border-none "
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Answer"
          />
          <div className="flex justify-center">
            {" "}
            <div
              className="my-8 w-[200px] text-center cursor-pointer p-2 bg-orange-700 rounded-md"
              onClick={addNewQuations}
            >
              Add Question And Answer{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
