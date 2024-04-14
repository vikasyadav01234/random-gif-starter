import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Tag = () => {
  const [tag, setTag] = useState('')  
  const [gif, setGif] = useState('');
  const [loading, setloading] = useState('false')
  async function fetchData(){

    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);

    const imageSource = data.data.images.downsized_large.url;
  
    setGif(imageSource);
    setloading(false);
  }

  useEffect( () => {
    fetchData();
  },[] )
  function clickHandler() {
    fetchData();
  }

  function changeHandler(event){
    setTag(event.target.value)
  }

  return (
    <div className="w-1/2 h-[450px] bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

      {
        loading ? (<Spinner/>):(<img src={gif} width="450"/>)
      }

      <input
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
      />
      
      <button onClick={clickHandler}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  )
}
export default Tag