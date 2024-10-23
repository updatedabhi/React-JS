import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [condition, setCondtion] = useState(true);
  const fetchData = async () => {
    const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    const result = await response.json();
    setData(result);
  };

  const handleClick = () => {
    fetchData();
    setCondtion(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>{condition ? 'Generate Joke' : 'Next Joke'}</button>
      <h1>{data.setup}</h1>
      <p>{data.punchline}</p>
    </div>
  );
}

export default App;
