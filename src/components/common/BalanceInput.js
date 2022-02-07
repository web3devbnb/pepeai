import NumberFormat from "react-number-format";

export default function BalanceInput({ value, onChange }) {

    return (
        <div className="input-wrapper input-wrapper--balance details__input-wrapper">
            <p className="input-wrapper__text">Balance: 345 BNB</p>
            <div className="input-wrapper__row">
                <NumberFormat className="input-wrapper__input" value={value} onChange={onChange} thousandSeparator={true} allowLeadingZeros={false} allowNegative={false} placeholder="Your amount.." />
                <button className="input-wrapper__max">MAX</button>
            </div>
        </div>
    );
}
