import React from "react";
import "../css/bill.css";

const Bill = () => {
    let tips = [5, 10, 15, 25, 50]
    return (
        <div className="bill-wrapper">
            <div>
                <p className="bill-title">Bill</p>
                <input className="bill-input" placeholder="$"></input>
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
                <input className="bill-input" placeholder="$"></input>
            </div>
        </div>
    );
}

export default Bill;