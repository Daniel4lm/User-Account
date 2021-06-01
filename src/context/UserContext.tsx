import React, { createContext, useReducer } from 'react';
import { StateType } from "../types";
import { UserReducer } from "../reducers/UserReducer";
import useDisplaySize from '../hooks/useDisplaySize';

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

const UserContext = createContext<{ state: StateType; dispatch: React.Dispatch<any>; isMobile: boolean; }>({
    state: userState,
    dispatch: () => null,
    isMobile: false
});

const UserProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, userState);

    const { isMobile } = useDisplaySize()

    return (
        <UserContext.Provider value={{ state, dispatch, isMobile }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };