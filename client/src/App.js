import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div className="App">{data.user}</div>;
}

export default App;
