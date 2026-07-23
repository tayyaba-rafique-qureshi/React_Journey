import React from 'react'
import { useState,useEffect } from 'react';

const DataFetcher = () => {

  const [data,setData]= useState([]);
  const [loading,setLoading]=useState(true);
  
    useEffect(() => {
     

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
    }, []);
    //dep list empty means it will render only on first render
    
  return (
    <div>
      {loading ? ( <h1>Loading...</h1>)
      : (
        <ul>
          {data.map(post => (
            <li key={post.id}> {post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher