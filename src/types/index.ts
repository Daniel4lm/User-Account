
export interface PersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    mobNumber: string;
    password: string;
}

export interface CreditCard {
    cardNumber: string;
    expYear: string;
    expMonth: string;
    active: boolean;
}

export interface BillingInfo {
    type: string;
    amount: number;
    paidAt: Date;
}

export interface StateType {
    personalInfo: PersonalInfo;
    creditCards: CreditCard[];
    subscribed: boolean;
    paymentPlan: "none" | "starter" | "business" | "enterprise",
    billingInfo: BillingInfo[];
    section: "none" | "personalInfo" | "creditCard" | "paymentPlan" | "billing";
    showCardForm: boolean;
    showCancelledScreen: boolean;
}

export enum ActionTypes {
    LoadUser = 'LOAD_USER',
    UpdateUser = 'UPDATE_USER',
    SelectCard = 'SELECT_CREDIT_CARD',
    ShowCardForm = 'SHOW_CARD_FORM',
    ShowCancelledScreen = 'SHOW_CANCELLED_FORM',
    AddNewCard = 'ADD_CREDIT_CARD',
    ChangeSubscr = 'CHANGE_SUBSCRIPTION',
    SelectPayment = 'SELECT_PAYMENT_PLAN',
    SelectSection = 'SELECT_SECTION',
    Unsubscribe = 'UNSUBSCRIPTION'
}