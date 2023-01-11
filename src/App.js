import React, { useState } from 'react';
import Bill from './components/Bill';

function App() {
  const amounts = {
    bill: 0,
    tip: 0,
    people: 0,
  }

  const [bill, setBill] = useState(amounts);
  


  console.log(bill)
  return (
    <div className="App">
    <Bill/>
    </div>
  );
}

export default App;
