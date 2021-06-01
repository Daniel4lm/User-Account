import React, { createContext, useReducer, useEffect } from 'react';

import { StateType } from "../types";
import { UserReducer } from "../reducers/UserReducer";
import useDisplaySize from '../components/hooks/useDisplaySize';

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
    section: "personalInfo",
    showCardForm: false,
    showCancelledScreen: false,
    toggle: false,
}

const UserContext = createContext<{ state: StateType; dispatch: React.Dispatch<any>; isDesktop: boolean; }>({
    state: userState,
    dispatch: () => null,
    isDesktop: false
});

const UserProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, userState);

    const { isDesktop } = useDisplaySize()

    return (
        <UserContext.Provider value={{ state, dispatch, isDesktop }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };