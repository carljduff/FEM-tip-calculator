import React, { useState, useEffect } from 'react';
import Bill from './components/Bill';
import Reset from "./components/Reset";
import "./css/bill.css";
function App() {
 

  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState("");
  const [perPerson, setPerPerson] = useState(0);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");

  const setAmount = () => {
    let tipAmount = Number(bill) * tip;
    setPerPerson(tipAmount/people);
    setTotal((Number(bill) + tipAmount)/people);
  }



  useEffect(() => {
    if(people) {
      setAmount();
    
    }
  }, [people])

 

  return (
    <div className="app">
    <Bill 
    setBill={setBill} 
    setTip={setTip} 
    setPeople={setPeople}
    bill={bill}
    people={people}
    input={input}
    
    />

    <Reset 
    perPerson={perPerson} 
    total={total} 
    bill={bill} 
    setPerPerson={setPerPerson} 
    setPeople={setPeople} 
    setBill={setBill} 
    setTip={setTip} 
    setTotal={setTotal}
    setInput={setInput}/>
    </div>
  );
}

export default App;
