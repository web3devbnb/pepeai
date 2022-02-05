import NumberFormat from "react-number-format";
import Select from './Select';

export default function Input({ className, type = "text", value, onChange, title, displayType = "text", placeholder, separator = true, errors, info, list, ...props }) {

    const id = Math.random();

    return (
        <div className={"input-wrapper " + (className ? className : "")}>
            <div className="input-wrapper__header">
                <label className="label" to={id}>{title}</label>
                {info && <p className="input-wrapper__info">{info}</p>}
            </div>
            <div className="input-wrapper__row">
                {type === "text" ?
                    <input type={type} className="input-wrapper__input" value={value} onChange={onChange} id={id} placeholder={placeholder} {...props} /> :
                    type === "select" ?
                        <Select list={list} className="select--input-wrapper" /> :
                        <NumberFormat className="input-wrapper__input" value={value} onValueChange={onChange} id={id} thousandSeparator={separator} displayType={displayType} allowLeadingZeros={false} allowNegative={false} placeholder={placeholder} {...props} />
                }
            </div>
            {errors &&
                <ul className="input-wrapper__errors">
                    {errors.map((item, index) => {
                        return (
                            <li className="input-wrapper__error" key={index}>{item}</li>
                        );
                    })}
                </ul>
            }
        </div>
    );
}
