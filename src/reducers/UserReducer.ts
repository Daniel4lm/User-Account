import { StateType, ActionTypes } from "../types";

type Actions = {
    type: ActionTypes;
    payload: any;
}

export const UserReducer = (state: StateType, action: Actions) => {

    switch (action.type) {
        case ActionTypes.LoadUser:
            return {
                ...state,
                ...action.payload,
            };
        case ActionTypes.UpdateUser:
            return {
                ...state,
                personalInfo: { ...state.personalInfo, ...action.payload },
            };
        case ActionTypes.SelectCard:
            return {
                ...state,
                creditCards: [
                    ...state.creditCards.map(card => {
                        if (card.cardNumber === action.payload) {
                            return { ...card, ...{ active: !card.active } }
                        }
                        return card;
                    })
                ],
            };
        case ActionTypes.ShowCardForm:
            return {
                ...state,
                showCardForm: action.payload,
            };
        case ActionTypes.ShowCancelledScreen:
            return {
                ...state,
                showCancelledScreen: action.payload,
            };
        case ActionTypes.AddNewCard:
            return {
                ...state,
                creditCards: [...state.creditCards, action.payload],
                showCardForm: false,
            };
        case ActionTypes.ChangeSubscr:
            return {
                ...state,
                subscribed: action.payload,
            };
        case ActionTypes.SelectPayment:
            return {
                ...state,
                paymentPlan: action.payload,
            };
        case ActionTypes.SelectSection:
            return {
                ...state,
                section: action.payload,
            };
        case ActionTypes.Unsubscribe:
            return {
                ...state,
                paymentPlan: "none",
                showCancelledScreen: true,
            };
        default:
            return state;
    }
};
