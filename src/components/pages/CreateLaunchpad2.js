import { useState } from "react";
import Calendar from "../../Icons/Calendar";
import Form from "../common/Form";
import Input from "../common/Input";
import Select from "../common/Select";
import Steps from "../common/Steps";
import TimeSelect from "../common/TimeSelect";
import DatePicker from 'react-datepicker';
import Time from './../../Icons/Time';

const refundTypeSelect = [
    { title: "Burn", selected: true, id: 0 },
    { title: "Burn 2", selected: false, id: 1 },
    { title: "Burn 3", selected: false, id: 2 }
];

const routerSelect = [
    { title: "Standard token", selected: true, id: 0 },
    { title: "Standard token 2", selected: false, id: 1 },
    { title: "Standard token 3", selected: false, id: 2 }
];

export default function CreateLaunchpad2() {
    const [form, setForm] = useState({
        rate: "",
        method: [true, false],
        softcap: "",
        hardcap: "",
        min: "",
        max: "",
        refundType: "",
        router: "",
        liquidity: "",
        listingRate: "",
        startDate: new Date(),
        startTime: "12:00 AM",
        endDate: new Date(),
        endTime: "12:00 AM",
        listingLockup: ""
    });

    const [startTimeOpened, setStartTimeOpened] = useState(false);
    const [endTimeOpened, setEndTimeOpened] = useState(false);

    function changeStartTime(hours, minutes, mode) {
        setForm({ ...form, startTime: hours + ":" + minutes + " " + mode });
    }

    function changeEndTime(hours, minutes, mode) {
        setForm({ ...form, endTime: hours + ":" + minutes + " " + mode });
    }

    function toggleStartTimeSelect() {
        setStartTimeOpened(state => !state);
    }

    function toggleEndTimeSelect() {
        setEndTimeOpened(state => !state);
    }

    function handleInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div className="launch container">
            <h1 className="title title--page">Create launchpad</h1>
            <Steps />
            <Form className="form--launchpad">
                <h1 className="title title--form form__title">DeFi Launchpad Info</h1>
                <Input type="number" displayType="input" className="form__input-wrapper" placeholder="0" title="Presale Rate" name="rate" info="If I spend 1 BNB how many tokens will I receive?" value={form.rate} onChange={handleInput} />
                <div className="input-wrapper form__input-wrapper form__input-wrapper--100">
                    <div className="input-wrapper__header">
                        <h1 className="label">Sale Method</h1>
                    </div>
                    <ul className="form__checkboxes">
                        <li className="form__checkbox checkbox">
                            <label className="checkbox__label">
                                <input type="radio" name="method" className="checkbox__input" checked={form.method[0]} onChange={() => setForm({ ...form, method: [true, false] })} />
                                <div className="checkbox__fake"></div>
                                <p className="checkbox__text">Public</p>
                            </label>
                        </li>
                        <li className="form__checkbox checkbox">
                            <label className="checkbox__label">
                                <input type="radio" name="method" className="checkbox__input" checked={form.method[1]} onChange={() => setForm({ ...form, method: [false, true] })} />
                                <div className="checkbox__fake"></div>
                                <p className="checkbox__text">Whitelist only</p>
                            </label>
                        </li>
                    </ul>
                </div>
                <Input type="number" displayType="input" className="form__input-wrapper" placeholder="0" title="SoftCap (BNB)" name="softcap" value={form.softcap} onChange={handleInput} />
                <Input type="number" displayType="input" className="form__input-wrapper" placeholder="0" title="HardCap (BNB)" name="hardcap" value={form.hardcap} onChange={handleInput} />
                <Input type="number" displayType="input" className="form__input-wrapper" placeholder="0" title="Minimum buy (BNB)" name="min" value={form.min} onChange={handleInput} />
                <Input type="number" displayType="input" className="form__input-wrapper" placeholder="0" title="Maximum buy (BNB)" name="max" value={form.max} onChange={handleInput} />
                <div className="input-wrapper form__input-wrapper">
                    <div className="input-wrapper__header">
                        <label className="label">Refund Type</label>
                    </div>
                    <Select list={refundTypeSelect} callback={(index) => setForm({ ...form, refundType: refundTypeSelect[index].title })} className="select--token" />
                </div>
                <div className="input-wrapper form__input-wrapper">
                    <div className="input-wrapper__header">
                        <label className="label label--required">Router</label>
                    </div>
                    <Select list={routerSelect} callback={(index) => setForm({ ...form, refundType: routerSelect[index].title })} className="select--token" />
                </div>
                <Input type="number" displayType="input" className="form__input-wrapper" placeholder="0" title="Liquidity (%)" name="listingRate" value={form.liquidity} onChange={handleInput} />
                <Input type="number" displayType="input" className="form__input-wrapper" placeholder="0" title="Listing Rate" name="listingRate" info="1 BNB = 0 $SENSEI" value={form.listingRate} onChange={handleInput} />
                <p className="form__text">
                    Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)
                    If I spend 1 BNB on how many tokens will I receive? Usually this amount is lower that presale rate to allow for a higher listing price on.
                </p>
                <h1 className="title title--page form__title form__title--mb">Select start time & end time (UTC)</h1>
                <div className="input-wrapper input-wrapper--icon form__input-wrapper">
                    <div className="input-wrapper__header">
                        <label className="label label--required">Start Date (UTC)</label>
                    </div>
                    <div className="input-wrapper__row">
                        <DatePicker className="input-wrapper__input" selected={form.startDate} onChange={(startDate) => setForm({ ...form, startDate })} dateFormat="dd.MM.yy" />
                        <Calendar className="input-wrapper__icon" />
                    </div>
                </div>
                <Input value={form.startTime} className="form__input-wrapper input-wrapper--icon" name="startTime" title="Start Time (UTC)" readOnly={true} Icon={Time} onClick={toggleStartTimeSelect}>
                    <TimeSelect opened={startTimeOpened} setOpened={setStartTimeOpened} changeTime={changeStartTime} />
                </Input>
                <div className="input-wrapper input-wrapper--icon form__input-wrapper">
                    <div className="input-wrapper__header">
                        <label className="label label--required">End Date (UTC)</label>
                    </div>
                    <div className="input-wrapper__row">
                        <DatePicker className="input-wrapper__input" selected={form.endDate} onChange={(endDate) => setForm({ ...form, endDate })} dateFormat="dd.MM.yy" />
                        <Calendar className="input-wrapper__icon" />
                    </div>
                </div>
                <Input value={form.endTime} className="form__input-wrapper input-wrapper--icon" name="endTime" title="End Time (UTC)" readOnly={true} Icon={Time} onClick={toggleEndTimeSelect}>
                    <TimeSelect opened={endTimeOpened} setOpened={setEndTimeOpened} changeTime={changeEndTime} />
                </Input>
                <Input type="number" displayType="input" className="form__input-wrapper form__input-wrapper--last" placeholder="0" title="Listing Lockup (days)" name="listingLockup" value={form.listingLockup} onChange={handleInput} />
                <div className="form__buttons">
                    <button className="button button--grey button--border form__button">Back</button>
                    <button className="button button--red form__button">Next</button>
                </div>
            </Form>
        </div>
    );
}
