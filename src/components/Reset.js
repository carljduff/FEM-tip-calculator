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
                <div>
                {/* tip = bill * tip */}
                    <p className="tip">Tip Amount</p>
                    <p className="tip">/ person</p>
                </div>
                <div>
                    <h1>${perPerson}</h1>
                </div>

            </div>

            <div className="tip-amount">
                <div>
                    <p className="tip">Total</p>
                    <p className="tip">/ person</p>
                </div>
                <div>
                    <h1>${total}</h1>
                </div>

            </div>

            <button onClick={resetHandler} className="reset-button">Reset</button>


        </div>
    )
}

export default Reset;