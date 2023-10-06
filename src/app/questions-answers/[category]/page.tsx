"use client";
import Link from "next/link";
import { useParams,useRouter } from "next/navigation";
import { getQuestions ,deleteQuation} from "../../../utils/data";
import { useState, useEffect } from "react";
export default function QuationsAnswers() {
  const params = useParams();
  const router = useRouter();
  const [qanda ,setQanda] = useState(getQuestions(params.category));

const deleteQuations=(id:any)=>{
  deleteQuation(params.category,id);
  setQanda(getQuestions(params.category));

}

  return (
    <div>
      <div className="flex justify-around bg-green-700 h-20 items-center">
     
       <Link href={"/"}> <div className="uppercase">quations and answers </div></Link>
        <div className="capitalize">
          {" "}
          <Link href={`/questions-answers/${params.category}/add-quation`}>
            add new quations
          </Link>{" "}
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-full md:max-w-4xl">
          {qanda.map((data: any, index: number) => (
            <div
              className={` p-5 m-2 rounded-md  flex  justify-between items-center  ${
                index % 2 === 0 ? "bg-neutral-800" : "bg-violet-600"
              }`}
            >
              <div>
                <div className="text-white" key={index}>
                  Que: { index+1 } &ensp; {data.q} ?{" "}
                </div>
                <div className="text-white flex text-justify pr-5	 " key={index}>
                
                  Ans: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <div key={index} dangerouslySetInnerHTML={{ __html: data.ans }} />
                </div>
              </div>
              <div className="text-red-500 uppercase cursor-pointer" onClick={()=>deleteQuations(data.id)}>delete</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
