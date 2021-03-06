import React from 'react';
import './../css/CurrencyForm.css'

const CurrencyForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="header">
                <h5>Select Currency:</h5>
            </div>
            <div className="input-group">
                <div className="token">TOKEN</div>
                <input type="number" name="currencyValue" id="" placeholder="0.00000001"/>
            </div>
            <div className="button-group">
                <button>Send</button>
                <button>Receive</button>
            </div>
        </form>
    );
}

export default CurrencyForm;
