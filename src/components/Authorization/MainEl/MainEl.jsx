import { useState } from 'react';

import './mainEl.css';

export default function Main() {
    const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
    const regPhone = /\++[0-9]/;
    const regName = /[a-z]/;

    const [errorNameCompanyLabel, setErrorNameCompanyLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [errorNameCompany, setErrorNameCompany] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
    );
    const [errorNameCompanyDiv, setErrorNameCompanyDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorNameLabel, setErrorNameLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [errorName, setErrorName] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
    );
    const [errorNameDiv, setErrorNameDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorSurnameLabel, setErrorSurnameLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [errorSurname, setErrorSurname] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
    );
    const [errorSurnameDiv, setErrorSurnameDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorTelephoneLabel, setErrorTelephoneLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [errorTelephone, setErrorTelephone] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
    );
    const [errorTelephoneDiv, setErrorTelephoneDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorMailLabel, setErrorMailLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [errorMail, setErrorMail] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
    );
    const [errorMailDiv, setErrorMailDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorNameProductLabel, setErrorNameProductLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [errorNameProduct, setErrorNameProduct] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
    );
    const [errorNameProductDiv, setErrorNameProductDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorDescriptionLabel, setErrorDescriptionLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [errorDescription, setErrorDescription] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
    );
    const [errorDescriptionDiv, setErrorDescriptionDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorApprovalLabel, setErrorApprovalLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );

    function registration() {
        let nameCompany = document.getElementById('nameCompany').value;
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let telephone = document.getElementById('telephone').value;
        let email = document.getElementById('email').value;
        let nameProduct = document.getElementById('nameProduct').value;
        let description = document.getElementById('description').value;
        let approval = document.getElementById('approval').value;

        if (nameCompany.length === 0) {
            setErrorNameCompanyLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorNameCompany(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__inputError'
            );
            setErrorNameCompanyDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorNameCompanyLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorNameCompany(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
            );
            setErrorNameCompanyDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (name.length === 0) {
            setErrorName(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__inputError'
            );
            setErrorNameLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorNameDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorName(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
            );
            setErrorNameLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorNameDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (surname.length === 0) {
            setErrorSurnameLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorSurname(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__inputError'
            );
            setErrorSurnameDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorSurnameLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorSurname(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
            );
            setErrorSurnameDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (telephone.length === 0) {
            setErrorTelephoneLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorTelephone(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__inputError'
            );
            setErrorTelephoneDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorTelephoneLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorTelephone(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
            );
            setErrorTelephoneDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (email.length === 0) {
            setErrorMailLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorMail(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__inputError'
            );
            setErrorMailDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorMailLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorMail(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
            );
            setErrorMailDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (nameProduct.length === 0) {
            setErrorNameProductLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorNameProduct(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__inputError'
            );
            setErrorNameProductDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorNameProductLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorNameProduct(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
            );
            setErrorNameProductDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (description.length === 0) {
            setErrorDescriptionLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorDescription(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__inputError'
            );
            setErrorDescriptionDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorDescriptionLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorDescription(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input'
            );
            setErrorDescriptionDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (approval.checked === 0) {
            setErrorApprovalLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
        } else {
            setErrorApprovalLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
        }
    }

    return (
        <main className="main">
            <div className="main__registrationBlock">
                <div className="main__registrationBlock__imgBlock">
                    <h1 className="main__registrationBlock__imgBlock__text">
                        ЗАЯВКА НА УЧАСТИЕ В ПРЕМИИ DAIRYTECH AWARD
                    </h1>
                    <div className="main__registrationBlock__imgBlock__img"></div>
                </div>
                <div className="main__registrationBlock__registrationForm">
                    <div className="main__registrationBlock__registrationForm__block">
                        <div className="main__registrationBlock__registrationForm__block__form">
                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock">
                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content">
                                    <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg">
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__title">
                                            <span>
                                                <strong>
                                                    Информация о компании
                                                </strong>
                                            </span>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label
                                                className={
                                                    errorNameCompanyLabel
                                                }
                                            >
                                                Название компании*
                                            </label>
                                            <input
                                                type="text"
                                                id="nameCompany"
                                                className={errorNameCompany}
                                            />
                                            <div
                                                className={errorNameCompanyDiv}
                                            >
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className={errorNameLabel}>
                                                Имя*
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className={errorName}
                                            />
                                            <div className={errorNameDiv}>
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label
                                                className={errorSurnameLabel}
                                            >
                                                Фамилия*
                                            </label>
                                            <input
                                                id="surname"
                                                type="text"
                                                className={errorSurname}
                                            />
                                            <div className={errorSurnameDiv}>
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label
                                                className={errorTelephoneLabel}
                                            >
                                                Телефон*
                                            </label>
                                            <input
                                                id="telephone"
                                                type="text"
                                                className={errorTelephone}
                                            />
                                            <div className={errorTelephoneDiv}>
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className={errorMailLabel}>
                                                Email*
                                            </label>
                                            <input
                                                id="email"
                                                placeholder="Введите ваш email"
                                                type="text"
                                                className={errorMail}
                                            />
                                            <div className={errorMailDiv}>
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Сайт
                                            </label>
                                            <input
                                                type="text"
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                            />
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Аккаунты в социальных сетях
                                            </label>
                                            <input
                                                type="text"
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                            />
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__title__two">
                                            <span>
                                                <strong>
                                                    Информация о продукте
                                                </strong>
                                            </span>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Номинации DairyTech Award 2024
                                            </label>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="1"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Оборудование и
                                                        технологии для
                                                        производства, розлива и
                                                        упаковки цельномолочной,
                                                        кисломолочной групп
                                                        продукции
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="2"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Оборудование и
                                                        технологии для
                                                        производства, розлива,
                                                        упаковки и хранения
                                                        мороженого
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="3"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Оборудование и
                                                        технологии для
                                                        производства, розлива и
                                                        упаковки продуктов
                                                        сыроделия (сыры и сырные
                                                        продукты)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="4"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Оборудование и
                                                        технологии для
                                                        производства, розлива и
                                                        упаковки продуктов
                                                        маслоделия (масло
                                                        сливочное, спреды)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="5"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Оборудование и
                                                        технологии для
                                                        производства, розлива и
                                                        упаковки сухих молочных
                                                        продуктов и продуктов
                                                        глубокой переработки
                                                        молока
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="6"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Современные упаковочные
                                                        решения
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="7"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Ингредиенты
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="8"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Автоматизация и
                                                        цифровизация технологий
                                                        в молочном производстве
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="9"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Автоматизация и
                                                        цифровизация
                                                        бизнес-процессов в
                                                        молочном производстве
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="10"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Технологии и средства
                                                        контроля качества
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="11"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Моющие и дезинфицирующие
                                                        средства в молочной
                                                        промышленности
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                                <label
                                                    className={
                                                        errorNameProductLabel
                                                    }
                                                >
                                                    Название*
                                                </label>
                                                <input
                                                    id="nameProduct"
                                                    type="text"
                                                    className={errorNameProduct}
                                                />
                                                <div
                                                    className={
                                                        errorNameProductDiv
                                                    }
                                                >
                                                    Error
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                                <label
                                                    className={
                                                        errorDescriptionLabel
                                                    }
                                                >
                                                    Описание*
                                                </label>
                                                <input
                                                    id="description"
                                                    type="text"
                                                    className={errorDescription}
                                                />
                                                <div
                                                    className={
                                                        errorDescriptionDiv
                                                    }
                                                >
                                                    Error
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                                <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                    Ссылка на доп. материалы
                                                    (изображение, видео,
                                                    документы)
                                                </label>
                                                <input
                                                    type="text"
                                                    className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                                />
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <label
                                                    className={
                                                        errorApprovalLabel
                                                    }
                                                >
                                                    Согласие*
                                                </label>
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        id="approval"
                                                        value="12"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Соглашаюсь с Положением
                                                        о Премии
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divA">
                                                <a href="" className="a">
                                                    Положение премии
                                                </a>
                                            </div>
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Согласие на получение
                                                уведомлений от Организатора
                                            </label>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="12"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Я хочу оставаться в
                                                        курсе информации о
                                                        выставках, организуемых
                                                        ООО "АйТиИ Экспо
                                                        Интернешнл", и узнавать
                                                        первым об открытии
                                                        регистрации посетителей,
                                                        специальных промокодах
                                                        на получение бесплатного
                                                        билета, мероприятиях
                                                        деловой программы,
                                                        продажах выставочных
                                                        стендов, рекламных и
                                                        спонсорских возможностях
                                                        и даю свое согласие на
                                                        получение информации
                                                        рекламного характера и
                                                        других актуальных для
                                                        участников или
                                                        посетителей сведениях
                                                        любыми способами (по
                                                        электронной почте, с
                                                        помощью смс, через
                                                        сообщения в мессенджерах
                                                        и пр.). От получения
                                                        такой информации я могу
                                                        отказаться в любое
                                                        время.
                                                    </label>
                                                </div>
                                            </div>
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Обработка персональных данных*
                                            </label>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        value="14"
                                                        type="checkbox"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    ></input>
                                                    <label
                                                        type="text"
                                                        className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain__input"
                                                    >
                                                        Согласие на обработку
                                                        персональных данных
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divSpan">
                                                <span className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divSpan__span">
                                                    Настоящим я даю ООО «АйТиИ
                                                    Экспо Интернешнл» (далее –
                                                    «Общество») свое согласие на
                                                    автоматизированную,
                                                    неавтоматизированную и
                                                    смешанную обработку, в том
                                                    числе сбор, запись,
                                                    систематизацию, накопление,
                                                    хранение, уточнение
                                                    (обновление, изменение),
                                                    извлечение, использование,
                                                    передачу (распространение,
                                                    предоставление, доступ),
                                                    обезличивание, блокирование
                                                    и уничтожение моих
                                                    персональных данных,
                                                    передаваемых мною (ФИО,
                                                    место работы, должность,
                                                    телефон, адрес электронной
                                                    почты и пр.), с целью
                                                    обеспечения моего участия в
                                                    выставке DairyTech,
                                                    получения обратной связи,
                                                    направления мне
                                                    информационных материалов,
                                                    обеспечения моего общения с
                                                    участниками и посетителями
                                                    выставки. &nbsp;
                                                    <br />
                                                    <br />
                                                    Подтверждаю, что ознакомлен
                                                    и согласен с (1)&nbsp;
                                                    <a href="" className="a">
                                                        Политикой обработки и
                                                        обеспечения безопасности
                                                        персональных данных
                                                    </a>
                                                    (2) и&nbsp;
                                                    <a href="" className="a">
                                                        Правилами посещения
                                                        мероприятий
                                                    </a>
                                                    , организуемых ООО «АйТиИ
                                                    Экспо Интернешнл».
                                                </span>
                                            </div>
                                            <div
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divButton"
                                                onClick={() => registration()}
                                            >
                                                <input
                                                    type="button"
                                                    value="ОТПРАВИТЬ"
                                                    className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divButton__button"
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
