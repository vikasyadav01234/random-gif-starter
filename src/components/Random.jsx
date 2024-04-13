import React, { useState } from "react";

const Random = () => {
  const [gif, setGif] = useState()

  return (
    <div>
      <h1>Random Gif</h1>
      <img src={gif/>
    </div>
  )
}