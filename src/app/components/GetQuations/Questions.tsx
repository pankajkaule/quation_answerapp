"use client";
import { loadQuestion } from "../../../lib/loadQuestion";
import { useState, useEffect } from "react";

export default function Questions() {
  const callAPI: any = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getQuestion", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ category_name: "category1" }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(callAPI());

  const [quote, setQuote] = useState(callAPI());

  return (
    <div className="flex justify-center  w-full">
      <div className="w-full lg:max-w-lg">
        <div>sfdsfds</div>
        {quote.data.map((q1: any, index: number) => (
          <div key={index} className="p-2 py-4 m-2 rounded-lg bg-slate-500">
            <div className="">{q1.quation}</div>
            <div className="pl-5">
              {" "}
              <div className="flex justify-between">
                <div className={`bg-orange-500`}>{q1.option1}</div>
              </div>
              <div className="flex justify-between">
                <div>{q1.option2}</div>
              </div>
              <div className="flex justify-between">
                <div>{q1.option3}</div>
              </div>
              <div className="flex justify-between">
                <div>{q1.option4}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
