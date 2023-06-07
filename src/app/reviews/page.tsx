import React from 'react'


export default async function Page() {
  const res = await fetch('http://localhost:1337/api/reviews/');
  const data =  res.json();

  console.log(data)
  return (
    <div>
      log
    </div>
  );
}

