import { type NextRequest, type NextResponse } from "next/server";
const fs = require('fs');
const csvParser = require('csv-parser');

export async function POST(request: NextRequest, response: NextResponse) {
  
  const { category_name } = await request.json();

    const filePath = `public/assets/csv/${category_name}.csv`;
    const data:any = await readCSVFile(filePath);
  console.log(data)
  return Response.json({ data })
}


async function readCSVFile(filePath:string) {
    return new Promise((resolve, reject) => {
      const results: any = [];
  
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data: any) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error: any) => reject(error));
    });
  }
export async function GET(request: NextRequest) {
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
