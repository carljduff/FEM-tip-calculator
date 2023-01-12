import React from "react";
import "../css/bill.css";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";


const Bill = ({setBill, setTip, setPeople, bill, people, input}) => {

    let tips = [5, 10, 15, 25, 50]

    const billHandler = (e) => {
        setBill(e.target.value);
    }

    const peopleHandler = (e) => {
        setPeople(Number(e.target.value));
        
    }

    const buttonHandler = (e) => {
        let percent = e.target.innerText || e.target.value;
        percent = (percent.replace("%", ""));
        setTip(Number(percent/100));
    }

    return (
        <div className="bill-wrapper">
            <div>
                <p className="bill-title">Bill</p>
                <img className="bill-dollar" src={dollar} alt="dollar bill sign"/>
                <input value={bill} onChange={billHandler} className="bill-input"></input>
            </div>

            <div>
                <p className="tip-title">Select Tip %</p>
                <div className="tip-buttons">
                {tips.map((tip, index) => {
                    return (
                        <button onClick={buttonHandler} key={index} className="tip-button">{tip}%</button>
                    )
                })}
                <input onChange={buttonHandler} placeholder="%" className="tip-button"></input>
                </div>
            </div>

            <div>
                <p className="bill-title">Number of People</p>
                <img className="bill-dollar" src={person} alt="dollar bill sign"/>

                <input value={people} onChange={peopleHandler} className="bill-input"></input>
            </div>
        </div>
    );
}

export default Bill;