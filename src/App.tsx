import React from 'react';
import './App.css';

function App() {

  const names = ["Aa", "Bb", "Cc"]
  const names2 = [{name:"A"}, {name:"B"}, {name:"C"}]
  const liElements = names2.map((n,index) => <li key={index}>{n.name}</li>)
  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
