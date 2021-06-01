import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
import { ActionTypes } from "../../types";

import style from "./Navbar.module.css";

export default function MobileNavbar() {

    const { dispatch } = useContext(UserContext);
    let location = useLocation();

    const changeItem = (section: string) => {

        dispatch({
            type: ActionTypes.SelectSection,
            payload: section
        })
    }

    return (
        <div className={style.mobileNav}>
            <Link to='/user-info' style={{ textDecoration: 'none' }}>
                <div className={style.item} onClick={() => changeItem('personalInfo')}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1801 16.165C13.7287 16.165 10.1201 12.5564 10.1201 8.10498C10.1201 3.65357 13.7287 
                            0.0449829 18.1801 0.0449829C22.6315 0.0449829 26.2401 3.65357 26.2401 8.10498C26.2401 12.5564 22.6315
                            16.165 18.1801 16.165Z" fill={location.pathname === '/user-info' ? "#005B96" : "#B3B3B3"} />
                        <path d="M0.046235 34.7014C0.827263 25.0844 8.63268 20.195 18.1464 20.195C27.7939 20.195 35.7203 
                            24.8158 36.3107 34.703C36.3343 35.0969 36.3107 36.315 34.797 36.315C27.3303 36.315 16.2349 36.315 
                            1.51084 36.315C1.0055 36.315 0.00369143 35.2252 0.046235 34.7014Z"
                            fill={location.pathname === '/user-info' ? "#0DB2F2" : "#CCCCCC"} />
                    </svg>
                    <span style={{ color: location.pathname === '/user-info' ? '#0DB2F2' : '#CCCCCC' }}>Personal Info</span>
                </div>
            </Link>
            <Link to='/cards' style={{ textDecoration: 'none' }}>
                <div className={style.item} onClick={() => changeItem('creditCard')}>
                    <svg width="41" height="37" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.3001 0.194458H4.06015C1.83444 0.194458 0.0301514 2.19923 0.0301514 4.67224V27.0611C0.0301514
                            29.5341 1.83444 31.5389 4.06015 31.5389H36.3001C38.5258 31.5389 40.3301 29.5341 40.3301 27.0611V4.67224C40.3301
                            2.19923 38.5258 0.194458 36.3001 0.194458Z" fill={location.pathname === '/cards' ? "#0DB2F2" : "#CCCCCC"} />
                        <path d="M40.3301 6.91107H0.0301514V13.6277H40.3301V6.91107Z"
                            fill={location.pathname === '/cards' ? "#005B96" : "#B3B3B3"} />
                        <path d="M34.2849 20.3445H30.2549C29.142 20.3445 28.2399 21.3469 28.2399 22.5834C28.2399 23.8199 29.142 24.8223
                            30.2549 24.8223H34.2849C35.3977 24.8223 36.2999 23.8199 36.2999 22.5834C36.2999 21.3469 35.3977 20.3445 34.2849
                            20.3445Z" fill={location.pathname === '/cards' ? "#005B96" : "#B3B3B3"} />
                    </svg>
                    <span style={{ color: location.pathname === '/cards' ? '#0DB2F2' : '#CCCCCC' }}>Credit Card details</span>
                </div>
            </Link>
            <Link to='/payment-plan' style={{ textDecoration: 'none' }}>
                <div className={style.item} onClick={() => changeItem('paymentPlan')}>
                    <svg width="49" height="37" viewBox="0 0 49 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.0225 0.0750122H9.0675C10.7368 0.0750122
                            12.09 1.42823 12.09 3.09751V25.2625C12.09 26.9318 10.7368 28.285 9.0675 28.285H3.0225C1.35322 
                            28.285 0 26.9318 0 25.2625V3.09751C0 1.42823 1.35322 0.0750122 3.0225 0.0750122ZM37.2775 
                            0.0750122H45.3375C47.0068 0.0750122 48.36 1.42823 48.36 3.09751V25.2625C48.36 26.9318 47.0068 
                            28.285 45.3375 28.285H37.2775C35.6082 28.285 34.255 26.9318 34.255 25.2625V3.09751C34.255 1.42823 
                            35.6082 0.0750122 37.2775 0.0750122Z"
                            fill={location.pathname === '/payment-plan' ? "#0DB2F2" : "#CCCCCC"} />
                        <path d="M27.2025 0.0750122H19.1425C17.4732 0.0750122 16.12 1.42823 16.12 3.09751V25.2625C16.12
                            26.9318 17.4732 28.285 19.1425 28.285H27.2025C28.8718 28.285 30.225 26.9318 30.225 
                            25.2625V3.09751C30.225 1.42823 28.8718 0.0750122 27.2025 0.0750122Z"
                            fill={location.pathname === '/payment-plan' ? "#005B96" : "#B3B3B3"} />
                    </svg>
                    <span style={{ color: location.pathname === '/payment-plan' ? '#0DB2F2' : '#CCCCCC' }}>Payment plan</span>
                </div>
            </Link>
            <Link to='/billing' style={{ textDecoration: 'none' }}>
                <div className={style.item} onClick={() => changeItem('billing')}>
                    <svg width="34" height="37" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0H4C2.34315 0 1 1.6582 1 3.7037V18.5185C1 20.564 2.34315 22.2222 4 22.2222H13C14.6569
                         22.2222 16 20.564 16 18.5185V3.7037C16 1.6582 14.6569 0 13 0Z"
                            fill={location.pathname === '/billing' ? "#005B96" : "#B3B3B3"} />
                        <path d="M27.2 0H18.8C17.2536 0 16 1.6582 16 3.7037V18.5185C16 20.564 17.2536 22.2222 18.8 
                        22.2222H27.2C28.7464 22.2222 30 20.564 30 18.5185V3.7037C30 1.6582 28.7464 0 27.2 0Z"
                            fill={location.pathname === '/billing' ? "#005B96" : "#B3B3B3"} />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.08334 3.61108H27.75C29.4529 3.61108 30.8334 
                        5.14492 30.8334 7.03701V27.5926C30.8334 29.4847 29.4529 31.0185 27.75 31.0185H3.08334C1.38046 
                        31.0185 0 29.4847 0 27.5926V7.03701C0 5.14492 1.38046 3.61108 3.08334 3.61108ZM24.6667 
                        20.7407C26.3696 20.7407 27.75 19.2069 27.75 17.3148C27.75 15.4227 26.3696 13.8889 24.6667 
                        13.8889C22.9638 13.8889 21.5834 15.4227 21.5834 17.3148C21.5834 19.2069 22.9638 20.7407 
                        24.6667 20.7407Z" fill={location.pathname === '/billing' ? "#0DB2F2" : "#CCCCCC"} />
                    </svg>
                    <span style={{ color: location.pathname === '/billing' ? '#0DB2F2' : '#CCCCCC' }}>Billing</span>
                </div>
            </Link>
        </div>
    )
}