import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header__contactsBlok">
                <a>
                    28−30 января 2025 • МВЦ «Крокус Экспо», павильон 1, зал 4,
                    Москва
                </a>
                <a className="header__contactsBlok__connection">
                    Связаться с нами
                </a>
                <div className="header__contactsBlok__language">
                    <a>RU</a>
                    <a>EN</a>
                </div>
            </div>
            <div className="header__navigationBlok">
                <div className="header__navigationBlok__buttonBlok">
                    <a className="header__navigationBlok__buttonBlok__a">
                        <div className="header__navigationBlok__buttonBlok__a__img"></div>
                    </a>
                    <div className="header__navigationBlok__buttonBlok__navigationButton">
                        <nav className="header__navigationBlok__buttonBlok__navigationButton__nuv">
                            <ul className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul">
                                <li className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li">
                                    <a
                                        href=""
                                        className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li__a"
                                    >
                                        О выставке
                                    </a>
                                </li>
                                <li className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li">
                                    <a
                                        href=""
                                        className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li__a"
                                    >
                                        Участие
                                    </a>
                                </li>
                                <li className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li">
                                    <a
                                        href=""
                                        className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li__a"
                                    >
                                        Посещение
                                    </a>
                                </li>
                                <li className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li">
                                    <a
                                        href=""
                                        className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li__a"
                                    >
                                        Деловая программ
                                    </a>
                                </li>
                                <li className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li">
                                    <a
                                        href=""
                                        className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li__a"
                                    >
                                        Медия
                                    </a>
                                </li>
                                <li className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li">
                                    <a
                                        href=""
                                        className="header__navigationBlok__buttonBlok__navigationButton__nuv__ul__li__a"
                                    >
                                        Сообщество
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header__navigationBlok__bookingButton">
                    <a
                        href=""
                        className="header__navigationBlok__bookingButton__a"
                    >
                        Забронируйте стенд
                    </a>
                </div>
            </div>
        </div>
    );
}
