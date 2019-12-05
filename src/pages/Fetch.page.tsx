import React from 'react';
import useFetch from 'react-fetch-hook';

const Fetch = () => {
  const path = 'http://localhost:3001'
  const { isLoading, data } = useFetch(path, {method: "get"});

  const fetchData = async () => {
    const fetched = await fetch(path)
    console.log('Data : ', data);
  }

  return(
    <main className='Page' >
      <h1>Fetchons des choses</h1>
      { isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={() => {fetchData()}} >Console log the data</button>
      )}
    </main>
  )
}

export default Fetch;
