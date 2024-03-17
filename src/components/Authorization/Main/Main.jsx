import './main.css';

export default function Main() {
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
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Название компании*
                                            </label>
                                            <input
                                                type="text"
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                            />
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__error">
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Имя*
                                            </label>
                                            <input
                                                type="text"
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                            />
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__error">
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Фамилия*
                                            </label>
                                            <input
                                                type="text"
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                            />
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__error">
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Телефон*
                                            </label>
                                            <input
                                                type="text"
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                            />
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__error">
                                                Error
                                            </div>
                                        </div>
                                        <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Email*
                                            </label>
                                            <input
                                                placeholder="Введите ваш email"
                                                type="text"
                                                className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                            />
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__error">
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
                                                <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                    Название*
                                                </label>
                                                <input
                                                    type="text"
                                                    className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                                />
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__error">
                                                    Error
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory">
                                                <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                    Описание*
                                                </label>
                                                <input
                                                    type="text"
                                                    className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__input"
                                                />
                                                <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__error">
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
                                            <label className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__label">
                                                Согласие*
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
                                                        Соглашаюсь с Положением
                                                        о Премии
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divA">
                                                <a href="">Положение премии</a>
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
                                                    <a href="">
                                                        Политикой обработки и
                                                        обеспечения безопасности
                                                        персональных данных
                                                    </a>
                                                    (2) и&nbsp;
                                                    <a href="">
                                                        Правилами посещения
                                                        мероприятий
                                                    </a>
                                                    , организуемых ООО «АйТиИ
                                                    Экспо Интернешнл».
                                                </span>
                                            </div>
                                            <div className="main__registrationBlock__registrationForm__block__form__mainBlock__content__reg__inputObligatory__divButton">
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
