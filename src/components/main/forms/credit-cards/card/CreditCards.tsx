import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { UserContext } from "../../../../../context/UserContext";
import { CreditCard } from "../../../../../types";
import { ActionTypes } from "../../../../../types";
import style from "./CreditCard.module.css";

function CreditCardList() {

    const { state, dispatch } = useContext(UserContext);

    const renderCardForm = () => {
        dispatch({
            type: ActionTypes.ShowCardForm,
            payload: true
        })
    }

    return (
        <div className={style.cardList}>
            <button className={style.newCard}
                onClick={renderCardForm}
            >
                + Add new card
                </button>
            { state.creditCards.map((card) => (
                <CardDetails
                    key={card.cardNumber}
                    cardNumber={card.cardNumber}
                    expYear={card.expYear}
                    expMonth={card.expMonth}
                    active={card.active}
                />
            ))}
        </div>
    )
}

function CardDetails({ cardNumber, expYear, expMonth, active }: CreditCard) {

    const { dispatch } = useContext(UserContext);

    const selectCard = () => {
        dispatch({
            type: ActionTypes.SelectCard,
            payload: cardNumber
        })
    }

    const svgSelection = () => {
        if (active) {
            return (
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="13" r="13" fill="#10A09A" />
                    <path d="M17.6956 7.39034C17.9349 7.13721 18.2533 6.99726 18.5837 7.00004C18.9141 7.00282 19.2306 7.1481 19.4664 7.40523C19.7023 7.66236 19.839 8.01123 19.8477 8.37822C19.8564 8.74521 19.7365 9.10162 19.5132 9.37224L12.7351 18.791C12.6186 18.9304 12.4779 19.0424 12.3215 19.1201C12.1652 19.1978 11.9963 19.2396 11.825 19.2432C11.6538 19.2467 11.4836 19.2118 11.3247 19.1406C11.1659 19.0694 11.0216 18.9633 10.9005 18.8287L6.40551 13.8343C6.28033 13.7047 6.17993 13.5484 6.1103 13.3748C6.04066 13.2011 6.00322 13.0137 6.0002 12.8236C5.99718 12.6335 6.02865 12.4447 6.09273 12.2685C6.15681 12.0922 6.25219 11.9321 6.37317 11.7976C6.49415 11.6632 6.63827 11.5572 6.79691 11.486C6.95556 11.4148 7.12549 11.3799 7.29656 11.3832C7.46763 11.3866 7.63634 11.4282 7.79262 11.5055C7.94891 11.5829 8.08957 11.6945 8.20621 11.8336L11.7634 15.7841L17.6633 7.43187C17.6739 7.41734 17.6852 7.40347 17.6973 7.39034H17.6956Z" fill="white" />
                </svg>
            )
        } else {
            return (
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="13" r="13" fill="#C6EDFF" />
                </svg>
            )
        }
    }

    const svgCard = () => {
        if (active) {
            return (
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.1559 0H4.14319C2.20932 0 0.641602 1.7419 0.641602 3.89065V23.3439C0.641602 25.4927 2.20932 27.2346 4.14319 27.2346H32.1559C34.0898 27.2346 35.6575 25.4927 35.6575 23.3439V3.89065C35.6575 1.7419 34.0898 0 32.1559 0Z"
                        fill="white" />
                    <path d="M35.6575 5.83606H0.641602V11.672H35.6575V5.83606Z"
                        fill="#005B96" />
                    <path d="M30.4051 17.5079H26.9035C25.9366 17.5079 25.1527 18.3788 25.1527 19.4532C25.1527 20.5276 25.9366 21.3986 26.9035 21.3986H30.4051C31.372 21.3986 32.1559 20.5276 32.1559 19.4532C32.1559 18.3788 31.372 17.5079 30.4051 17.5079Z"
                        fill="#005B96" />
                </svg>

            )
        } else {
            return (
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.1559 0H4.14319C2.20932 0 0.641602 1.7419 0.641602 3.89065V23.3439C0.641602 25.4927 2.20932 27.2346 4.14319 27.2346H32.1559C34.0898 27.2346 35.6575 25.4927 35.6575 23.3439V3.89065C35.6575 1.7419 34.0898 0 32.1559 0Z"
                        fill="#0DB2F2" />
                    <path d="M35.6575 5.836H0.641602V11.672H35.6575V5.836Z"
                        fill="#005B96" />
                    <path d="M30.4051 17.5079H26.9035C25.9366 17.5079 25.1527 18.3788 25.1527 19.4532C25.1527 20.5276 25.9366 21.3986 26.9035 21.3986H30.4051C31.372 21.3986 32.1559 20.5276 32.1559 19.4532C32.1559 18.3788 31.372 17.5079 30.4051 17.5079Z"
                        fill="#005B96" />
                </svg>
            )
        }
    }

    return (
        <>
            <Helmet>
                <title>Credit cards</title>
            </Helmet>
            <div className={active ? `${style.cardItem} ${style.active}` : style.cardItem}>

                {svgCard()}
                <span className={style.cNumber}>{cardNumber}</span>
                <div className={style.checkBox} onClick={selectCard}>
                    {svgSelection()}
                </div>
            </div>
        </>
    )
}

export { CardDetails, CreditCardList }