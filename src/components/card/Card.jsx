import './card.css';
import Image from 'next/image';

import arrow from '../../images/arrow.svg'

const Card = (props) => {
    return(
        <section className="card">
            <a href='#!' className='card__link'></a>
            <Image className='card__img' src={props.img} alt='123' />
            <div className='card__body'>
                <div className="card__text">
                    <h3 className="card__title">{props.title}</h3>
                    <p className="card__desc">Explore Now!</p>
                </div>
                <div className="card__icon">
                    <Image src={arrow} alt='arrow' />
                </div>
            </div>
        </section>
    );
};

export default Card;