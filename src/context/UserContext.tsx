import React, { createContext, useReducer, useEffect } from 'react';

import { StateType } from "../types";
import { UserReducer } from "../reducers/UserReducer";

const userState: StateType = {
    personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        mobNumber: '',
        password: '',
    },
    creditCards: [],
    subscribed: true,
    paymentPlan: "starter",
    billingInfo: [],
    section: "none",
    showCardForm: false,
    showCancelledScreen: false
}

const UserContext = createContext<{ state: StateType; dispatch: React.Dispatch<any>; }>({
    state: userState,
    dispatch: () => null
});

const UserProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, userState);

    useEffect(() => {

    }, []);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };