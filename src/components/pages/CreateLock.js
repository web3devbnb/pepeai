import { useEffect, useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import DatePicker from "react-datepicker";
import "../../scss/components/datepicker/datepicker.scss";
import Calendar from './../../Icons/Calendar';
import TimeSelect from "../common/TimeSelect";
import Time from './../../Icons/Time';

export default function CreateLock() {
    const [form, setForm] = useState({
        address: "",
        amount: "",
        date: new Date(),
        time: "12:00 AM"
    });

    const [opened, setOpened] = useState(false);

    function handleInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function changeTime(hours, minutes, mode) {
        setForm({...form, time: hours + ":" + minutes + " " + mode});
    }

    function toggleTimeSelect() {
        setOpened(state => !state);
    }

    useEffect(() => {
        function handleDocumentClick(e) {

            if (opened && !e.target.closest('.time')) {
                toggleTimeSelect();
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, [opened]);

    return (
        <div className="lock container">
            <h1 className="title title--page">Create Lock</h1>
            <Form className="form--lock">
                <h2 className="title title--form form__title">Creating a new lock</h2>
                <div className="form__tip">⭐️ Sensei Shib is audited by Certik: <a href="/">https://leaderboard.certik.io/projects/senseishib</a></div>
                <Input value={form.address} className="form__input-wrapper" name="address" placeholder="Enter token or LP address" onChange={handleInput} title="Token or LP Token address" />
                <Input value={form.amount} className="form__input-wrapper" name="amount" placeholder="Ex: Sensei Swap" onChange={handleInput} title="Amount" />
                <div className="input-wrapper input-wrapper--icon form__input-wrapper">
                    <div className="input-wrapper__header">
                        <label className="label">Lock date until (UTC)</label>
                    </div>
                    <div className="input-wrapper__row">
                        <DatePicker className="input-wrapper__input" selected={form.date} onChange={(date) => setForm({ ...form, date })} dateFormat="dd.MM.yy" />
                        <Calendar className="input-wrapper__icon" />
                    </div>
                </div>
                <Input value={form.time} className="form__input-wrapper input-wrapper--icon" name="time" title="Lock time until (UTC)" readOnly={true} Icon={Time} onClick={toggleTimeSelect}>
                    <TimeSelect opened={opened} setOpened={setOpened} changeTime={changeTime} />
                </Input>
                <p className="form__info">You will pay: 0 BUSD</p>
                <button className="button button--red form__button">Lock</button>
            </Form>
        </div>
    );
}
