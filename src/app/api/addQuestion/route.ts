import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const {category_name,data}=await request.json()
    const fs = require('fs');

    // Sample JSON array of objects to be appended to the CSV file
    const newData = data;
    
    // Read existing CSV file
    fs.readFile(`public/assets/csv/${category_name}.csv`, 'utf8', (err:any, data:any) => {
      if (err) {
        console.error('Error reading CSV file:', err);
        return;
      }
    
      // Parse existing CSV data into an array of arrays
      const csvData: string[][] = data.split('\n').map((row: string) => row.split(','));
    
      // Convert JSON array of objects to CSV format and append it to the existing data
      const newDataCSV = newData.map((item: { [s: string]: unknown; } | ArrayLike<unknown>) => Object.values(item).join(',')).join('\n');
      const updatedCSVData = [...csvData, newDataCSV];
    
      // Write updated data back to the CSV file
      fs.writeFile(`public/assets/csv/${category_name}.csv`, updatedCSVData.join('\n'), (err:any) => {
        if (err) {
          console.error('Error appending data to CSV file:', err);
        } else {
          console.log('Data has been appended to the CSV file.');
        }
      });
    });
    
}
