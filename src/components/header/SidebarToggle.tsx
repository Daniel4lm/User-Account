// Main App context
//import { AppContext, useAppContext } from "../../context/Context";
import style from "./Toggle.module.css";

interface ToggleType {
    color: string;
}

export default function Toggle({ color }: ToggleType) {

    //const { isDesktop, toggleSideBar, setToggleSideBar, shrinkSideBar, setShrinkSideBar, hSize } = useAppContext();
    /*
    const toggleHandle = () => {
        if (isDesktop) {
            setShrinkSideBar(shrink => shrink === 'off' ? 'on' : 'off');
        } else {
            setToggleSideBar(toggle => !toggle);
        }
    }*/

    return ( // onClick={toggleHandle}
        <button className={style.toggleBtn}>
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.14286C0 1.57454 0.203189 1.02949 0.564866 0.627628C0.926543 0.225765 1.41708 0 1.92857 0H28.9286C29.4401 0 29.9306 0.225765 30.2923 0.627628C30.654 1.02949 30.8571 1.57454 30.8571 2.14286C30.8571 2.71118 30.654 3.25622 30.2923 3.65808C29.9306 4.05995 29.4401 4.28571 28.9286 4.28571H1.92857C1.41708 4.28571 0.926543 4.05995 0.564866 3.65808C0.203189 3.25622 0 2.71118 0 2.14286Z" fill={color} />
                <path d="M0 27.8571C0 27.2888 0.203189 26.7437 0.564866 26.3419C0.926543 25.94 1.41708 25.7142 1.92857 25.7142H28.9286C29.4401 25.7142 29.9306 25.94 30.2923 26.3419C30.654 26.7437 30.8571 27.2888 30.8571 27.8571C30.8571 28.4254 30.654 28.9705 30.2923 29.3723C29.9306 29.7742 29.4401 29.9999 28.9286 29.9999H1.92857C1.41708 29.9999 0.926543 29.7742 0.564866 29.3723C0.203189 28.9705 0 28.4254 0 27.8571Z" fill={color} />
                <path d="M1.92857 12.8572C1.41708 12.8572 0.926543 13.0829 0.564866 13.4848C0.203189 13.8867 0 14.4317 0 15C0 15.5684 0.203189 16.1134 0.564866 16.5153C0.926543 16.9171 1.41708 17.1429 1.92857 17.1429H17.3571C17.8686 17.1429 18.3592 16.9171 18.7208 16.5153C19.0825 16.1134 19.2857 15.5684 19.2857 15C19.2857 14.4317 19.0825 13.8867 18.7208 13.4848C18.3592 13.0829 17.8686 12.8572 17.3571 12.8572H1.92857Z" fill={color} />
            </svg>
        </button>
    );
}
