import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { StateType, ActionTypes } from "../../types";

import Toggle from "./SidebarToggle";
import style from './Header.module.css'

export default function Header() {

    const { state, dispatch } = useContext(UserContext);

    return (
        <div className={style.header}>
            <Toggle color='#005B96' />
            <div className={style.userInfo}>
                <div className={style.userIcon}>
                    {state.personalInfo.firstName.charAt(0)}
                    {state.personalInfo.lastName.charAt(0)}
                </div>
                <p className={style.userName}>
                    {state.personalInfo.firstName}
                    {state.personalInfo.lastName}
                </p>
            </div>
        </div>
    );
}//  