import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from "../../../../context/UserContext";
import { ActionTypes } from "../../../../types";

import style from "./Billing.module.css";

export default function Billing() {

    const { state, dispatch } = useContext(UserContext);

    return (
        <div className={style.container}>

            <span className={style.tabTitle}>Billing information</span>
            <span className={style.tabInfo}>Overview of your credit card transactions</span>

            <table className={style.billTable}>
                <thead>
                    <tr>
                        <th>Subscription plan</th>
                        <th>Amount paid</th>
                        <th>Paid at</th>
                    </tr>
                </thead>
                <tbody>
                    {state.billingInfo.map(billing => (
                        <tr key={billing.type}>
                            <td>{billing.type}</td>
                            <td>{billing.amount} USD</td>
                            <td>{billing.paidAt}</td>
                        </tr>
                    ))}
                </tbody>


            </table>

        </div>
    )
}