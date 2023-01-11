import React, { useState } from 'react';
import Bill from './components/Bill';
import Reset from "./components/Reset";
function App() {
  const amounts = {
    bill: 0,
    tip: 0,
    people: 0,
  }

  const [bill, setBill] = useState(amounts);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  


  console.log(bill)
  return (
    <div className="App">
    <Bill/>
    <Reset tip={tip} total={total}/>
    </div>
  );
}

export default App;
