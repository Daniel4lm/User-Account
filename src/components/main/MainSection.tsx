import { useContext, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
/* components */
import PersonalInfo from "./forms/personal-info/PersonalInfo";
import NewCreditCard from "./forms/credit-cards/form/CreditCardForm";
import Payment from "./forms/payment/Payment";
import Billing from "./forms/billing/Billing";
import Unsubscribe from "./forms/payment/unsubsrcribe/Unsubscribe";

import users from "../../data/users.json";

import style from "./MainSection.module.css";
import { ActionTypes } from '../../types';

export default function MainSection() {

    const { state, dispatch } = useContext(UserContext);

    let history = useHistory();

    useEffect(() => {
        /*
        dispatch({
            type: ActionTypes.LoadUser,
            payload: users[0]
        });*/

        history.push('/user-info');
    }, []);

    useEffect(() => {
        
        if (history.location.pathname !== '/cards' && state.showCardForm) {
            console.log('opalio sam ...')
            dispatch({
                type: ActionTypes.ShowCardForm,
                payload: false
            })
        }
    }, [history.location.pathname]);

    return (
        <div className={style.mainContainer}>
            <Switch>
                <Route path='/user-info' exact component={PersonalInfo} />
                <Route path='/user-info/unsubscribe' component={Unsubscribe} />
                <Route path='/cards' >
                    {state.showCardForm && <NewCreditCard />}
                </Route>
                <Route path='/payment-plan' component={Payment} />
                <Route path='/billing' component={Billing} />
            </Switch>
        </div>
    )
}