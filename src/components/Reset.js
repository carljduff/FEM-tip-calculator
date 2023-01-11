import React from "react";
import "../css/bill.css";
const Reset = ({tip, total}) => {
    return(
        <div className="reset-wrapper">
            <div className="tip-amount">
                <div>
                    <p className="tip">Tip Amount</p>
                    <p className="tip">/ person</p>
                </div>
                <div>
                    ${tip}
                </div>

            </div>

            <div className="tip-amount">
                <div>
                    <p className="tip">Total</p>
                    <p className="tip">/ person</p>
                </div>
                <div>
                    ${total}
                </div>

            </div>


        </div>
    )
}

export default Reset;