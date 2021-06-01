import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import { UserContext } from "../../../../context/UserContext";
import { ActionTypes } from "../../../../types";

import style from "./Payment.module.css";

const paymentPlans = [
    {
        name: 'starter',
        perMonth: 5,
        gateways: 5,
        support: 'Basic support',
        updates: 'Monthly updates',
        free: 'First month free',
        cancel: 'Cancel anytime'
    },
    {
        name: 'business',
        perMonth: 10,
        gateways: 10,
        support: 'Basic support',
        updates: 'Monthly updates',
        free: 'First month free',
        cancel: 'Cancel anytime'
    },
    {
        name: 'enterprise',
        perMonth: 15,
        gateways: 15,
        support: '24/7 support',
        updates: 'Monthly updates',
        free: 'First month free',
        cancel: 'Cancel anytime'
    }
]

export default function Payment() {

    const { state, dispatch } = useContext(UserContext);
    const [payPlan, setPayPlan] = useState<string>(state.paymentPlan);

    let history = useHistory();

    const selectPlan = (name: string) => {
        dispatch({
            type: ActionTypes.SelectPayment,
            payload: name
        })
    }

    const renderIcon = (name: string) => {
        switch (name) {
            case 'starter':
                return (
                    <svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.0317 56.9887C8.29298 56.9887 7.55427 56.6858 6.9633 56.08L1.05357 50.0218C-0.128372 48.8101 -0.128372 46.9927 1.05357 45.781C2.23552 44.5694 4.15618 44.5694 5.19038 45.781L9.0317 49.7189L18.7827 39.7228C19.9647 38.5112 21.7376 38.5112 22.9196 39.7228C24.1015 40.9345 24.1015 42.7519 22.9196 43.9636L11.1001 56.08C10.5091 56.6858 9.77042 56.9887 9.0317 56.9887Z" fill="#005B96" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.167114 28.9051V10.3668C0.167114 5.12982 4.30848 0.884399 9.41711 0.884399H52.5838C57.6924 0.884399 61.8338 5.12982 61.8338 10.3668V38.8141C61.8338 38.8244 61.8338 38.8348 61.8337 38.8451L61.9107 38.8141V53.3089C61.9107 55.0545 60.5302 56.4697 58.8273 56.4697C58.0096 56.4697 57.2253 56.1367 56.6471 55.5439L49.5773 48.2965H34.0332C33.2399 35.9409 23.2123 26.1709 10.9588 26.1709C7.06116 26.1709 3.38876 27.1593 0.167114 28.9051ZM12.5004 13.5276C10.7976 13.5276 9.41711 14.9428 9.41711 16.6884C9.41711 18.4341 10.7976 19.8492 12.5004 19.8492H40.2504C41.9533 19.8492 43.3338 18.4341 43.3338 16.6884C43.3338 14.9428 41.9533 13.5276 40.2504 13.5276H12.5004Z" fill="#0DB2F2" />
                    </svg>
                )
            case 'business':
                return (
                    <svg width="69" height="57" viewBox="0 0 69 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M31.4306 53.0001V42.5001C31.4306 40.5671 32.9541 39.0001 34.8334 39.0001C36.7127 39.0001 38.2362 40.5671 38.2362 42.5001V53.0001H46.7431C47.6828 53.0001 48.4445 53.7836 48.4445 54.7501C48.4445 55.7166 47.6828 56.5001 46.7431 56.5001H22.9237C21.984 56.5001 21.2223 55.7166 21.2223 54.7501C21.2223 53.7836 21.984 53.0001 22.9237 53.0001H31.4306Z" fill="#005B96" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.20856 0.500061H65.4585C67.3378 0.500061 68.8613 2.06706 68.8613 4.00006V39C68.8613 40.933 67.3378 42.5 65.4585 42.5H4.20856C2.32926 42.5 0.805786 40.933 0.805786 39V4.00006C0.805786 2.06706 2.32926 0.500061 4.20856 0.500061ZM9.31272 11.0001C8.37307 11.0001 7.61133 11.7836 7.61133 12.7501C7.61133 13.7166 8.37307 14.5001 9.31272 14.5001H39.9377C40.8773 14.5001 41.6391 13.7166 41.6391 12.7501C41.6391 11.7836 40.8773 11.0001 39.9377 11.0001H9.31272ZM9.31272 18.0001C8.37307 18.0001 7.61133 18.7836 7.61133 19.7501C7.61133 20.7166 8.37307 21.5001 9.31272 21.5001H19.521C20.4607 21.5001 21.2224 20.7166 21.2224 19.7501C21.2224 18.7836 20.4607 18.0001 19.521 18.0001H9.31272Z" fill="#0DB2F2" />
                    </svg>

                )
            case 'enterprise':
                return (
                    <svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.9171 49.122V52.2762H32.8337C36.0554 52.2762 38.6671 54.9535 38.6671 58.2561H15.3337C15.3337 54.9535 17.9454 52.2762 21.1671 52.2762H24.0837V49.1213C18.3342 48.4676 13.0245 45.8969 8.89876 41.866L5.82119 45.3222C4.73519 46.5418 2.89037 46.6279 1.70067 45.5146C0.510977 44.4014 0.426915 42.5102 1.51292 41.2906L6.72783 35.4342C7.92977 34.0844 10.0213 34.1461 11.1456 35.5645C15.0019 40.4298 20.7681 43.3064 27.0004 43.3064C38.2762 43.3064 47.4171 33.9359 47.4171 22.3767C47.4171 15.6036 44.26 9.3764 39.0213 5.45732C37.7201 4.48391 37.435 2.61347 38.3845 1.27958C39.3341 -0.0543167 41.1587 -0.346542 42.4599 0.626872C49.1879 5.66001 53.2504 13.6732 53.2504 22.3767C53.2504 36.2278 43.0419 47.6347 29.9171 49.122Z" fill="#005B96" />
                        <path d="M27 40.3166C36.665 40.3166 44.5 32.2847 44.5 22.3769C44.5 12.4691 36.665 4.43719 27 4.43719C17.335 4.43719 9.5 12.4691 9.5 22.3769C9.5 32.2847 17.335 40.3166 27 40.3166Z" fill="#0DB2F2" />
                    </svg>
                )
            default:
                break;
        }
    }

    return (
        <>
            <Helmet>
                <title>Payment</title>
            </Helmet>
            <div style={{ width: '90%' }}>
                <div className={style.paymentContainer}>

                    {paymentPlans.map(plan => (
                        <div key={plan.name} className={style.paymentCard}>

                            {renderIcon(plan.name)}

                            <div className={style.group1}>
                                <span className={style.payType}>
                                    {plan.name}
                                </span>

                                <div className={style.cont1}>
                                    <span className={style.count}>
                                        ${plan.perMonth}
                                    </span>
                                    <span><sub>&nbsp;/ per month</sub></span>
                                </div>
                            </div>

                            <ul className={style.payList}>
                                <li>Up to {plan.gateways} gateways</li>
                                <li>{plan.support}</li>
                                <li>{plan.updates}</li>
                                <li>{plan.free}</li>
                                <li>{plan.cancel}</li>
                            </ul>

                            { payPlan === plan.name ?
                                <div className={style.btnGroup}>
                                    <div className='selected'>
                                        Plan selected
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="11" cy="11.6181" rx="11" ry="11.2764" fill="#10A09A" />
                                            <path d="M15.1017 7.23128C15.3042 7.03366 15.5736 6.92441 15.8532 6.92658C16.1328 6.92874 16.4006 7.04216 16.6001 7.2429C16.7997 7.44364 16.9153 7.71599 16.9227 8.00249C16.9301 8.28899 16.8286 8.56723 16.6397 8.77849L10.9044 16.1315C10.8058 16.2403 10.6868 16.3277 10.5544 16.3884C10.4221 16.449 10.2792 16.4817 10.1343 16.4845C9.98939 16.4872 9.84541 16.46 9.711 16.4044C9.57658 16.3488 9.45448 16.266 9.35199 16.1609L5.54857 12.2619C5.44265 12.1608 5.3577 12.0388 5.29877 11.9032C5.23985 11.7676 5.20817 11.6213 5.20561 11.4729C5.20306 11.3245 5.22969 11.1771 5.28391 11.0395C5.33813 10.9019 5.41883 10.7769 5.5212 10.6719C5.62357 10.567 5.74552 10.4843 5.87975 10.4287C6.01399 10.3731 6.15778 10.3458 6.30253 10.3484C6.44728 10.351 6.59004 10.3835 6.72228 10.4439C6.85452 10.5043 6.97354 10.5914 7.07224 10.7L10.0822 13.7841L15.0744 7.26369C15.0834 7.25235 15.093 7.24153 15.1031 7.23128H15.1017Z" fill="white" />
                                        </svg>
                                    </div>
                                    <button onClick={() => { history.push('/user-info/unsubscribe') }}>Cancel subscription</button>
                                </div>
                                :
                                <div className={style.btnGroup}>
                                    <button onClick={() => setPayPlan(plan.name)}>Select plan</button>
                                    <div className='selected' style={{ visibility: 'hidden' }}>
                                        Plan selected
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="11" cy="11.6181" rx="11" ry="11.2764" fill="#10A09A" />
                                            <path d="M15.1017 7.23128C15.3042 7.03366 15.5736 6.92441 15.8532 6.92658C16.1328 6.92874 16.4006 7.04216 16.6001 7.2429C16.7997 7.44364 16.9153 7.71599 16.9227 8.00249C16.9301 8.28899 16.8286 8.56723 16.6397 8.77849L10.9044 16.1315C10.8058 16.2403 10.6868 16.3277 10.5544 16.3884C10.4221 16.449 10.2792 16.4817 10.1343 16.4845C9.98939 16.4872 9.84541 16.46 9.711 16.4044C9.57658 16.3488 9.45448 16.266 9.35199 16.1609L5.54857 12.2619C5.44265 12.1608 5.3577 12.0388 5.29877 11.9032C5.23985 11.7676 5.20817 11.6213 5.20561 11.4729C5.20306 11.3245 5.22969 11.1771 5.28391 11.0395C5.33813 10.9019 5.41883 10.7769 5.5212 10.6719C5.62357 10.567 5.74552 10.4843 5.87975 10.4287C6.01399 10.3731 6.15778 10.3458 6.30253 10.3484C6.44728 10.351 6.59004 10.3835 6.72228 10.4439C6.85452 10.5043 6.97354 10.5914 7.07224 10.7L10.0822 13.7841L15.0744 7.26369C15.0834 7.25235 15.093 7.24153 15.1031 7.23128H15.1017Z" fill="white" />
                                        </svg>
                                    </div>

                                </div>
                            }
                        </div>
                    ))}

                </div >
                <section className={style.submitSection}>
                    <input type="button" value='Save changes' onClick={() => selectPlan(payPlan)} />
                </section>
            </div>
        </>
    )
}