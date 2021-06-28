import arrow_down from "./images/arrow_down.svg";
import logo from "./images/logo.svg";
import loupe from "./images/loupe.svg";
import user from "./images/user.svg";
import shop from "./images/shopping-cart.svg";
import burger from "./images/burger.svg";

import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header__nav">
                <div className="container">
                    <div className="header__nav_wrapper">
                        <ul className="header__list">
                            <li className="header__list_item">Главная</li>
                            <li className="header__list_item">О компании</li>
                            <li className="header__list_item">Информация о доставке</li>
                            <li className="header__list_item">Для юридических лиц</li>
                        </ul>
                        <span>info@stancia-plantacia.ru</span>
                    </div>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__main_wrapper">
                        <div className="header__logo">
                            <img className="header__logo_image" src={logo} alt="logo" />
                        </div>
                        <div className="header__catalog">
                            <div className="header__catalog_wrapper">
                                <div className="header__catalog_button">
                                    <div className="header__button_lines">
                                        <span className="header__button_line"></span>
                                        <span className="header__button_line"></span>
                                        <span className="header__button_line"></span>
                                    </div>
                                    <span className="header__button_text">Каталог</span>
                                    <img className="header__button_arrow_down" src={arrow_down} alt="arrow_down" />
                                </div>
                                <div className="header__search">
                                    <input className="header__search_input" type="input" placeholder="Поиск по сайту: Компот, варенье, лук или другое" />
                                    <button className="header__search_button">
                                        <img className="header__search_icon" src={loupe} alt="loupe" />
                                    </button>
                                </div>
                            </div>
                            <div className="header__contact">
                                <strong className="header__phone_number">8 (843) 500-51-59</strong>
                                <span className="header__weekday">
                                    <span className="header__circle"></span>
                                    <p className="header__weekday_item">пн–вс: 9:00–21:00</p>
                                </span>
                            </div>
                            <div className="header__user">
                                <div className="header__user_image_wrapper">
                                    <img className="header__user_image" src={user} alt="user" />
                                </div>
                                Войти
                            </div>
                            <div className="header__shopping">
                                <div className="header__shopping_image_wrapper">
                                    <img className="header__shopping_image" src={shop} alt="shop" />
                                    <span className="header__shop_current">12</span>
                                </div>
                                12000p
                            </div>
                            <div className="header__burger">
                                <img className="header__burger_line" src={burger} alt="burger" />
                                <strong className="header__burger_text">Меню</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;