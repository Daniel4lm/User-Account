import { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from "../../../../../context/UserContext";
import { ActionTypes } from "../../../../../types";

import style from "./Unsubscribe.module.css";

export default function UnsubscribeForm() {

    const { state, dispatch } = useContext(UserContext);

    let history = useHistory();

    const showSplashScreen = () => {
        dispatch({
            type: ActionTypes.Unsubscribe
        })
    }

    return (
        <div className={style.container}>

            <div className={style.group1}>
                <h2>We are sorry to see you go </h2>
                <span>
                    Before you unsubscribe consider changing the payment plan.
                    If you are uncertain which plan best suites your business do not
                    hesitate to contact our support and we will do our best to assist
                    you in choosing the right plan for you.
                </span>
            </div>

            <div className={style.group2}>

                <h3>OUR JOURNEY SO FAR</h3>

                <div className={style.cards}>
                    <div className={style.card}>
                        <h1>4</h1>
                        <span>PROJECTS</span>
                    </div>
                    <div className={style.card}>
                        <h1>3</h1>
                        <span>GATEWAYS</span>
                    </div>
                    <div className={style.card}>
                        <h1>$14K</h1>
                        <span>PAYMENTS</span>
                    </div>
                </div>
            </div>

            <div className={style.group3}>
                <h2>Are you sure you want to unsubscribe?</h2>
                <span>
                    If you cancel your subscription you won’t be able to use any of the platform features and your payments will be discontinued.
                </span>

                <div className={style.btnGroup}>
                    <button onClick={() => { history.goBack() }}>Cancel</button>
                    <button onClick={showSplashScreen}>Confirm</button>
                </div>
            </div>

        </div >
    )
}