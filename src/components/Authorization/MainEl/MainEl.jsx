import { useState } from 'react';
import { inputOblogatory } from './data/inputOblogatory';

import './mainEl.css';

export default function Main() {
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
    const [errorApprovalDiv, setErrorApprovalDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    const [errorDataProcessingLabel, setErrorDataProcessingLabel] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
    );
    const [erroDataProcessingDiv, setErrorDataProcessingDiv] = useState(
        'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
    );

    function registration() {
        let nameProduct = document.getElementById('nameProduct').value;
        let description = document.getElementById('description').value;
        let approval = document.getElementById('approval');
        let dataProcessing = document.getElementById('dataProcessing');

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

        if (approval.checked == 0) {
            setErrorApprovalLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorApprovalDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorApprovalLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorApprovalDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
            );
        }

        if (dataProcessing.checked == 0) {
            setErrorDataProcessingLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__labelError'
            );
            setErrorDataProcessingDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorBlock'
            );
        } else {
            setErrorDataProcessingLabel(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label'
            );
            setErrorDataProcessingDiv(
                'main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__errorNone'
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
                                        {inputOblogatory.length &&
                                            inputOblogatory.map((item) => {
                                                return (
                                                    <>
                                                        <div
                                                            className={
                                                                item.divClassName
                                                            }
                                                        >
                                                            <label
                                                                className={
                                                                    item.labelClassName
                                                                }
                                                            >
                                                                {item.labelText}
                                                            </label>
                                                            <input
                                                                type={
                                                                    item.inputType
                                                                }
                                                                id={
                                                                    item.inputId
                                                                }
                                                                placeholder={
                                                                    item.inputPlaceholder
                                                                }
                                                                className={
                                                                    item.inputClassName
                                                                }
                                                            />
                                                            <div
                                                                className={
                                                                    item.errorClassName
                                                                }
                                                            >
                                                                {item.errorText}
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
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
                                                <div
                                                    className={errorApprovalDiv}
                                                >
                                                    Error
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
                                            <label
                                                className={
                                                    errorDataProcessingLabel
                                                }
                                            >
                                                Обработка персональных данных*
                                            </label>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox">
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divCheckbox__certain">
                                                    <input
                                                        id="dataProcessing"
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
                                                <div
                                                    className={
                                                        erroDataProcessingDiv
                                                    }
                                                >
                                                    Error
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
