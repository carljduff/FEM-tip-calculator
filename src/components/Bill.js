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
            <div className="bill-top-wrapper">
                <p className="bill-title-top">Bill</p>
                <img className="bill-dollar" src={dollar} alt="dollar bill sign"/>
                <input type="number" value={bill} onChange={billHandler} className="bill-input top"></input>
            </div>

            <div className="select-wrapper">
                <p className="tip-title">Select Tip %</p>
                <div className="tip-buttons">
                {tips.map((tip, index) => {
                    return (
                        <button onClick={buttonHandler} key={index} className="tip-button"><span className="btn">{tip}%</span></button>
                    )
                })}
                <input type="number" onChange={buttonHandler} placeholder="Custom" className="tip-button"></input>
                </div>
            </div>

            <div className="num-people-wrapper">
                <p className="bill-title">Number of People</p>
                <img className="bill-people" src={person} alt="dollar bill sign"/>

                <input value={people} type="number" onChange={peopleHandler} className="bill-input bottom"></input>
            </div>
        </div>
    );
}

export default Bill;