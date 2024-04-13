import React, { useState } from "react";

const Random = () => {
  const [gif, setGif] = useState('')

  return (
    <div>
      <h1>Random Gif</h1>
      <img src={gif} width="450"/>
      <button>
        Generate
      </button>
    </div>
  )
}
export default Random