import Form from './Form';
import { Link } from 'react-router-dom';
import Input from './Input';
import { useState } from 'react';
import useSmallScreen from './../../hooks/useSmallScreen';

export default function AddTokenAddress({ inputInfo }) {
    const [value, setValue] = useState("");
    const smallScreen = useSmallScreen(768);

    return (
        <Form className="form--address">
            <header className="form__header">
                <h2 className="title title--form">Add token address</h2>
                {!smallScreen && <Link to="/create_token" className="button button--green button--border form__button form__button--header">Create token</Link>}
            </header>
            <Input
                className="input-wrapper--address form__input-wrapper"
                title="Token address"
                displayType="input"
                placeholder="Your address..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
                errors={["Invalid token address"]}
                info={inputInfo}
            />
            <button type="submit" className="button button--blue form__submit">Next</button>
            {smallScreen && <Link to="/create_token" className="button button--green button--border form__button form__button--header">Create token</Link>}
        </Form>
    );
}