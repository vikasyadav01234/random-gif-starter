import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setloading] = useState('false')
  async function fetchData(){
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);

    const imageSource = data.data.images.downsized_large.url;
  
    setGif(imageSource);
  }

  useEffect( () => {
    fetchData();
  },[] )
  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-xl underline uppercase font-bold">A Random Gif</h1>

      {
        loading ? (<Spinner/>):()
      }
      
      <button onClick={clickHandler}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  )
}
export default Random