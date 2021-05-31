import style from "./Footer.module.css";;

const Footer = () => {

    return (
        <footer className={style.footer}>
            <span>Terms {'&'} Conditions | Privacy policy</span>
            <span>Version 1.0.2</span>
        </footer>
    );
}

export default Footer;