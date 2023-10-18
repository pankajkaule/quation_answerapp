export async function loadQuestion() {
    const res = await fetch('http://localhost:3000/api/getQuestion',
    {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify({ category_name: 'category1' }),
  }
    )
    const data = await res.json()
   
    return data
  }