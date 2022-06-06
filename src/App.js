import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  const fetchData = () => {
    fetch('/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // }, []);

  return (
    <div className="App">
      <button onClick={fetchData}>Api 1</button>
      <button onClick={fetchData}>Api 2</button>
    </div>
  );
}

export default App;
