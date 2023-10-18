import { readdir } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");
const path = require("path");
export async function POST(request: Request, response: NextApiResponse) {
  // console.log(request)
  const { category_name } = await request.json();
  console.log(category_name);

  const data = [
    ["quation", "option1", "option2", "option3", "option4", "answer"],
  ];

  const csvContent = data.map((row) => row.join(",")).join("\n");
  const filePath = `public/assets/csv/${category_name}.csv`;

  fs.writeFile(filePath, csvContent, (err: any) => {
    if (err) {
      console.error("Error writing to CSV file:", err);
    } else {
      console.log(`CSV file "${filePath}" has been created successfully.`);
    }
  });
  return Response.json({ data: "file created successfully" });
}


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const folderPath = "public/assets/csv"; 
  let data322 = fs.readdirSync(folderPath);
  const fileNamesWithoutExtension = data322.map(
    (file: any) => path.parse(file).name
  );
  return Response.json(fileNamesWithoutExtension);
}
