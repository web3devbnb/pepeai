import { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import Select from "../common/Select";

const selectList = [
    { title: "Standard token", id: 0, selected: true },
    { title: "Custom token", id: 1, selected: false }
];

export default function CreateToken() {
    const [form, setForm] = useState({
        name: "",
        symbol: "",
        decimals: "",
        totalSupply: ""
    });

    function handleInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h1 className="title title--page">Create token</h1>
            <Form className="form--token">
                <h2 className="title title--form form__title">Creating a new token</h2>
                <div className="input-wrapper form__input-wrapper">
                    <div className="input-wrapper__header">
                        <label className="label">Token Type</label>
                    </div>
                    <Select className="select--token" list={selectList} />
                </div>
                <Input title="Name" displayType="input" placeholder="Ex: Sensei Swap" className="form__input-wrapper" type="text" name="name" value={form.name} onChange={handleInput} />
                <Input title="Symbol" displayType="input" placeholder="Ex: $SENSEI" className="form__input-wrapper" type="text" name="symbol" value={form.symbol} onChange={handleInput} />
                <Input title="Decimals" displayType="input" placeholder="Ex: 18" className="form__input-wrapper" type="text" name="decimals" value={form.decimals} onChange={handleInput} />
                <Input title="Total Supply" displayType="input" placeholder="Ex: 100000000" className="form__input-wrapper form__input-wrapper--last" type="number" name="totalSupply" value={form.totalSupply} onChange={handleInput} />
                <button type="submit" className="button button--blue form__submit">Create token</button>
            </Form>
        </div>
    );
}