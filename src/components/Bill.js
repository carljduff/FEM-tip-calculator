import React from "react";
import "../css/bill.css";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
const Bill = () => {
    let tips = [5, 10, 15, 25, 50]
    return (
        <div className="bill-wrapper">
            <div>
                <p className="bill-title">Bill</p>
                <img className="bill-dollar" src={dollar} alt="dollar bill sign"/>
                <input className="bill-input"></input>
            </div>

            <div>
                <p className="tip-title">Select Tip %</p>
                <div className="tip-buttons">
                {tips.map((tip, index) => {
                    return (
                        <button key={index} className="tip-button">{tip}%</button>
                    )
                })}
                <input placeholder="%" className="tip-button"></input>
                </div>
            </div>

            <div>
                <p className="bill-title">Number of People</p>
                <img className="bill-dollar" src={person} alt="dollar bill sign"/>

                <input className="bill-input"></input>
            </div>
        </div>
    );
}

export default Bill;