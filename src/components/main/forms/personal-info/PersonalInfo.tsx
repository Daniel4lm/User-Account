import React, { useState, useContext, useEffect, useRef } from 'react';
import { UserContext } from "../../../../context/UserContext";
import { ActionTypes } from "../../../../types";
import style from "./PersonalInfo.module.css";

interface Values {
    [key: string]: string;
}

interface Errors {
    [key: string]: string | null;
}

export default function PersonalInfo() {

    const { state, dispatch } = useContext(UserContext);

    const [values, setValues] = useState<Values>({
        fName: state.personalInfo.firstName || '',
        lName: state.personalInfo.lastName || '',
        email: state.personalInfo.email || '',
        mobile: state.personalInfo.mobNumber || '',
        pass: state.personalInfo.password || '',
        confPass: state.personalInfo.password || ''
    });

    const [inputErrors, setInputErrors] = useState<Errors>({
        name_error: '',
        email_error: '',
        mob_error: '',
        pass_error: ''
    });

    const firstInputRef = useRef<HTMLInputElement>(null);

    /*  INPUT VALIDATION FUNCTION  */
    const inputValidation = () => {

        const emailRegex = /^[a-zA-Z0-9_]{4,}@[a-zA-Z0-9-]{3,}(?:\.[a-zA-Z0-9-]{3,})*$/i;
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/gi;
        const namePattern = /^[^a-zA-Z]{1,}/gi;
        const mobilePattern = /[^0-9/-]{1,}/gi;

        let errors: Errors = {};

        if (!values.fName || values.fName.length < 5 || !values.lName || values.lName.length < 5) {
            errors.name_error = 'Your name must be at least 5 characters long!';
        } else if (namePattern.test(values.fName) || namePattern.test(values.lName)) {
            errors.name_error = "Name can't start with number or special character!";
        }

        if (!values.email) {
            errors.email_error = "Your e-mail can't be empty!";
        } else if (!emailRegex.test(values.email)) {
            errors.email_error = 'Your email have invalid format!';
        }

        if (!values.mobile || values.mobile === ' ') {
            errors.mob_error = "Your mobile number can't be empty!";
        } else if (mobilePattern.test(values.mobile)) {
            errors.mob_error = "Your mobile number have invalid format!";
        }

        if (!values.pass || !values.confPass) {
            errors.pass_error = 'Please provide your password!';
        } else {

            if (values.pass !== values.confPass) {
                errors.pass_error = "Passwords don't match!";
                return errors;
            } else if (values.pass.length < 8){
                errors.pass_error = "At least eight characters long!";
            }            
            else if (!passPattern.test(values.pass)) {
                errors.pass_error = 'At least one uppercase letter At least one lowercase letter At least one number At least one special character (i.e. !) At least eight characters long';
            }
        }

        if(Object.keys(errors).length > 0) {
            return errors;
        }
        
        dispatch({
            type: ActionTypes.UpdateUser,
            payload: {
                firstName: values.fName,
                lastName: values.lName,
                email: values.email,
                mobNumber: values.mobile,
                password: values.pass,
            }
        })
        
        return errors;
    }

    /*  INPUT VALUES UPDATING  */
    const inputUpdate = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setValues(values => {
            return { ...values, ...{ [name]: value } };
        });
    }

    /*  Executing sumbmitting fuction  */
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputErrors(inputValidation());
    }

    /* FIRST LOADING */
    useEffect(() => {
        if (firstInputRef.current !== null) {
            firstInputRef.current.focus();
        }
    }, []);

    return (
        <>
            <form className={style.container} autoComplete='off' onSubmit={handleSubmit} noValidate>

                <section >
                    <label htmlFor="fName">First name</label>
                    <input
                        ref={firstInputRef}
                        type="text"
                        name='fName'
                        value={values.fName}
                        onChange={inputUpdate}
                    />
                    <span className={inputErrors.name_error ? style.error : `${style.container} ${style.hide}`}>{inputErrors.name_error}</span>
                </section>

                <section>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        name='email'
                        value={values.email}
                        onChange={inputUpdate}
                    />
                    <span className={inputErrors.email_error ? style.error : `${style.container} hide`}>{inputErrors.email_error}</span>
                </section>

                <section>
                    <label htmlFor="lName">Last name</label>
                    <input
                        type="text"
                        name='lName'
                        value={values.lName}
                        onChange={inputUpdate}
                    />
                    <span className={inputErrors.name_error ? style.error : `${style.container} hide`}>{inputErrors.name_error}</span>
                </section>

                <section>
                    <label htmlFor="mobile">Mobile phone</label>
                    <input
                        type="text"
                        name='mobile'
                        value={values.mobile}
                        onChange={inputUpdate}
                    />
                    <span className={inputErrors.mob_error ? style.error : `${style.container} hide`}>{inputErrors.mob_error}</span>
                </section>

                <section>
                    <label htmlFor="pass">Password</label>
                    <input
                        type="password"
                        name='pass'
                        value={values.pass}
                        onChange={inputUpdate}
                    />
                    <span className={inputErrors.pass_error ? style.error : `${style.container} hide`}>{inputErrors.pass_error}</span>
                </section>

                <section>
                    <label htmlFor="confPass">Confirm password</label>
                    <input
                        type="password"
                        name='confPass'
                        value={values.confPass}
                        onChange={inputUpdate}
                    />
                </section>

                <section className={style.submitSection}>
                    <input type="submit" value='Save changes' />
                </section>
            </form>
        </>
    )
}

