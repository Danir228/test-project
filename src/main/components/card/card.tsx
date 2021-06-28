import heart from "../../images/heart.svg";

import "./card.scss";

interface CardProps {
    image: string;
    percent: number;
    text: string;
    new_price: number;
    old_price: number;
}

const Card = ({ percent, image, text, new_price, old_price }: CardProps) => {
    return (
        <div className="card">
            <div className="card__image_wrapper">
                <img className="card__image" src={image} />
                <span className="card__percent">-{percent}%</span>
            </div>
            <div className="card__content">
                <p className="card__text">{text}</p>
                <span className="card__price_wrapper">
                    <strong className="card__new_price">{new_price}₽</strong>
                    <strong className="card__old_price">{old_price}</strong>
                </span>
                <div className="card__bottom">
                    <img className="card__heart" src={heart} alt="heart" />
                    <button className="card__button">Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
};

export default Card;