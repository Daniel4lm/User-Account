import { useContext, useState } from "react";
import { UserContext } from "../../../../../context/UserContext";
import { ActionTypes } from "../../../../../types";

import style from "./CreditCardForm.module.css";

interface Values {
    [key: string]: any;
}

export default function NewCreditCard() {

    const { state, dispatch } = useContext(UserContext);

    const [values, setValues] = useState<Values>({
        cardNumber: '',
        expMonth: '',
        expYear: '',
    });

    /*  INPUT VALUES UPDATING  */
    const inputUpdate = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setValues(values => {
            return { ...values, ...{ [name]: value } };
        });
    }

    /*  Executing sumbmitting fuction  */
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({
            type: ActionTypes.AddNewCard,
            payload: {
                cardNumber: values.cardNumber,
                expMonth: values.expMonth,
                expYear: values.expYear,
            }
        })
        //setInputErrors(inputValidation());
    }

    return (
        <>
            <form className={style.container} autoComplete='off' onSubmit={handleSubmit} noValidate>
                <section style={{ gridArea: 'number' }} >
                    <label htmlFor="cardNumber">Card number</label>
                    <input
                        type="text"
                        name='cardNumber'
                        value={values.fName}
                        onChange={inputUpdate}
                    />
                </section>

                <section style={{ gridArea: 'month' }}>
                    <label htmlFor="expMonth">Expiration month</label>
                    <input
                        type="text"
                        name='expMonth'
                        value={values.expMonth}
                        onChange={inputUpdate}
                    />
                </section>

                <section style={{ gridArea: 'year' }}>
                    <label htmlFor="expYear">Expiration year</label>
                    <input
                        type="text"
                        name='expYear'
                        value={values.expYear}
                        onChange={inputUpdate}
                    />
                </section>

                <section className={style.submitSection}>
                    <input type="submit" value='Save changes' />
                </section>
            </form>
        </>
    )
}