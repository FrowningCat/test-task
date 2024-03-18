import './footer.css';

export default function Fotter() {
    return (
        <footer className="footer">
            <div className="footer__contextBlock">
                <div className="footer__contextBlock__contacts">
                    <div className="footer__contextBlock__contacts__left">
                        <h5>Организатор</h5>
                        <div className="footer__contextBlock__contacts__left__imgBlock">
                            <div className='className="footer__contextBlock__contacts__left__imgBlock__specificImg'>
                                <a href="">1</a>
                            </div>
                            <div className='className="footer__contextBlock__contacts__left__imgBlock__specificImg'>
                                <a href="">2</a>
                            </div>
                        </div>
                        <h5>Мы в соцсетях</h5>
                        <div className="footer__contextBlock__contacts__left__imgBlock">
                            <div className='className="footer__contextBlock__contacts__left__imgBlock__img'>
                                <a
                                    href=""
                                    className="footer__contextBlock__contacts__left__imgBlock__img__vk"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="vk"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="footer__contextBlock__contacts__left__imgBlock__img__vk__svg"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contextBlock__contacts__right">
                        <h5>КОНТАКТЫ И ПОМОЩЬ</h5>
                        <span>
                            <a
                                href=""
                                className="footer__contextBlock__contacts__right__a"
                            >
                                md@ite.group
                            </a>
                        </span>
                        <h6>Горячая линия</h6>
                        <span>
                            <a
                                href=""
                                className="footer__contextBlock__contacts__right__a"
                            >
                                +7-(495)-799-55-85
                            </a>
                        </span>
                        <h6>Поддержка посетителей</h6>
                        <span>
                            <a
                                href=""
                                className="footer__contextBlock__contacts__right__a"
                            >
                                +7-(495)-799-55-85
                            </a>
                        </span>
                        <h6>
                            <a
                                href=""
                                className="footer__contextBlock__contacts__right__a"
                            >
                                Контакты{' '}
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="angle-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 512"
                                    className="footer__contextBlock__contacts__right__a__svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                    ></path>
                                </svg>
                            </a>
                        </h6>
                        <h5>Место проведения выставки</h5>
                        <span>
                            Россия, г. Москва, МВЦ «Крокус Экспо», Павильон 1,
                            Зал 4
                        </span>
                        <h6>
                            <a
                                href=""
                                className="footer__contextBlock__contacts__right__a"
                            >
                                Место проведения выставки
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="angle-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 512"
                                    className="footer__contextBlock__contacts__right__a__svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                    ></path>
                                </svg>
                            </a>
                        </h6>
                    </div>
                </div>
                <div className="footer__contextBlock__bootomRow">
                    <a href="" className="footer__contextBlock__bootomRow__a">
                        Положения и условия
                    </a>
                    <a href="" className="footer__contextBlock__bootomRow__a">
                        Политика конфиденциальности
                    </a>
                    <a href="" className="footer__contextBlock__bootomRow__a">
                        Cookie policy
                    </a>
                    <a href="" className="footer__contextBlock__bootomRow__a">
                        Карта сайта
                    </a>
                </div>
            </div>
        </footer>
    );
}
