import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from "../../../../context/UserContext";
import { ActionTypes } from "../../../../types";

import style from "./PaymentCancelled.module.css";
import image from "./leftPic.svg";

export default function PaymentCandelled() {

    const { dispatch } = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {

        history.goBack();

        setTimeout(() => {
            dispatch({
                type: ActionTypes.ShowCancelledScreen,
                payload: false
            });

            history.push('/user-info');
        }, 4000);

    }, []);

    return (// <rect y="-5" width="100%" height="400" fill="#005B96" />
        <div className={style.container}>

            <section className={style.leftSide}>
                <img className={style.pic} src={image} />
            </section>

            <section className={style.rightSide}>
                <div>
                    <h2>You have cancelled your subscription</h2>
                    <p>If you wish to continue using our platform please renew your subscription</p>
                </div>
            </section>

        </div>
    )
}