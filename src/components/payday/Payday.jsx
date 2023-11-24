'use client';

import './payday.css';
import Image from 'next/image';
import paydayImg from '../../images/promo-img.jpg'
import promoImg from '../../images/promo_girl.svg'


const Payday = () => {

    return (
        <section className="payday">
            <div className="container">
                <div className="payday__content">
                    <div className="payday__img">
                        <Image
                            src={paydayImg}
                            alt='girl' />
                    </div>
                    <div className="payday__text">
                        <h1 className="payday__title">
                            <span className='highight'>
                                <span>
                                    PAYDAY
                                </span>
                            </span>
                            SALE NOW

                        </h1>
                        <p className="payday__desc">
                            Spend minimal $100 get 30% off
                            voucher code for your next purchase <br />

                        </p>
                        <span className='payday__weight'>1 June - 10 June 2021 <br /></span>
                        <p className="payday__desc-term" >*Terms & Conditions apply</p>
                        <div className="payday__btn-wrapper">
                            <button className="payday__btn">Shop Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Payday;