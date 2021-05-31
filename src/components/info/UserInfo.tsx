import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Switch, Route } from 'react-router-dom';
import { CreditCardList } from "../main/forms/credit-cards/card/CreditCards";
//import { StateType, ActionTypes } from "../../types";
import { infoText } from "../../data/info";

import style from './UserInfo.module.css'

export default function UserInfo() {

    const { state } = useContext(UserContext);

    return (
        <div className={style.infoContainer}>
            <div className={style.content}>
                <span className={style.infoTitle}>Your account</span>
                <span className={style.infoBellow}>You can modify personal information here </span>

                <div className={style.userCard}>
                    <div className={style.userIcon}>
                        <span>
                            {state.personalInfo.firstName.charAt(0)}
                            {state.personalInfo.lastName.charAt(0)}
                        </span>
                    </div>
                    <div className={style.userInfo}>
                        <span className={style.name}>
                            {state.personalInfo.firstName}
                            {state.personalInfo.lastName}
                        </span>
                        <span className={style.email}>{state.personalInfo.email}</span>
                        <span className={style.mob}>{state.personalInfo.mobNumber}</span>
                    </div>
                </div>
                {state.section !== 'none' &&
                    <>
                        <span className={style.text}>{infoText[state.section].title}</span>
                        <div className={style.infoBallon}>
                            <span>
                                {infoText[state.section].text}
                            </span>
                        </div>
                    </>
                }

                <Switch>
                    <Route path='/cards' exact component={CreditCardList} />
                </Switch>

            </div>
        </div>
    )
}