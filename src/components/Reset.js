import React from "react";
import "../css/bill.css";
const Reset = ({perPerson, total, setPerPerson, setPeople, setBill, setTip, setTotal, setInput}) => {

    const resetHandler = () => {
        setPerPerson(0);
        setPeople("");
        setBill("");
        setTip(0);
        setTotal(0);
        setInput("");
    }

    return(
        <div className="reset-wrapper">
            <div className="tip-amount">
                <div className="tip-person-wrapper">
                {/* tip = bill * tip */}
                    <p className="tip tip-amount-label">Tip Amount</p>
                    <p className="tip person-label">/ person</p>
                </div>
                <div>
                    <h1 className="total-label">${perPerson}</h1>
                </div>

            </div>

            <div className="total-amount-wrap">
                <div className="total-person">
                    <p className="tip total-amount-label">Total</p>
                    <p className="tip person-label">/ person</p>
                </div>
                <div className="total-amount">
                    <h1 className="total-label">${total}</h1>
                </div>

            </div>

            <button onClick={resetHandler} className="reset-button">Reset</button>


        </div>
    )
}

export default Reset;