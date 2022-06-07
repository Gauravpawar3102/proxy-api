import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({});
  function fetchData() {
    // fetch('/todos/1')
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Work with JSON data here
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     // Do something for an error here
    //     console.log('Error Reading data ' + err);
    //   });
    fetch('/todos/1')
      .then((res) => res.json())
      .then((res) => {
        console.log('Output 1:', res);
        setState(res);
      });
    //  fetch('/todos/2')
    //    .then((res) => res.json())
    //    .then((res) => {
    //      console.log('Output 1:', res);
    //     //  setState(res);
    //    });
  }

  return (
    <div className="App">
      <div className="data-render">{state.title}</div>
      <div className="button-group">
        <button onClick={fetchData}>Api 1</button>
        <button onClick={fetchData}>Api 2</button>
      </div>
    </div>
  );
}

export default App;
