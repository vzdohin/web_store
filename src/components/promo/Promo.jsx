'use client';

import './promo.css';
import Image from 'next/image';
import promoImg from '../../images/promo_girl.svg'

const Promo = () => {

    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <h1 className="promo__title">
                            <span className='highight'>
                                <span>
                                    LET’S
                                </span>
                            </span>
                            EXPLORE
                            <span className='highight highight_yellow'>
                                <span>
                                    UNIQUE
                                </span>
                            </span>
                            CLOTHES.
                        </h1>
                        <div className="promo__desc">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="promo__btn-wrapper">
                            <button className="promo__btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="promo__img">
                        <Image className="promo__img_border-rad"
                            src={promoImg}
                            alt='girl' 
                            />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;