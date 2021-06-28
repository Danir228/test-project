import Card from "./components/card/card";
import image_1 from "./images/1.svg";
import image_2 from "./images/2.svg";
import image_3 from "./images/3.svg";
import image_4 from "./images/4.svg";
import left from "./images/left.svg";
import right from "./images/right.svg";

import "./main.scss";

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__menu">
                    <div className="main__menu_items">
                        <span className="main__title_line"></span>
                        <h1 className="main__title">Акции и скидки</h1>
                    </div>
                    <div className="main__arrows">
                        <img className="main__arrow" src={left} alt="arrow" />
                        <img className="main__arrow" src={right} alt="arrow" />
                    </div>
                </div>
                <div className="main__cards">
                    <Card image={image_1} percent={20} text="Вода Сан Бенедетто негаз 0,25 л" new_price={100} old_price={125} />
                    <Card image={image_2} percent={24} text="Бутень /Шушан/ маринованный AGROYANS 730гр" new_price={175} old_price={230} />
                    <Card image={image_3} percent={13} text="Варенье из баклажана AGROYANS, 430гр." new_price={185} old_price={212} />
                    <Card image={image_4} percent={28} text="Компот AGROYANS из абрикосов 1 л" new_price={110} old_price={152} />
                </div>
            </div>
        </div>
    );
};

export default Main;