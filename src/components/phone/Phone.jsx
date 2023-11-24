'use client';

import './phone.css';
import Image from 'next/image';
import phoneImg from '../../images/phone.png'
import ButtonApple from '../../images/butApl.svg'
import ButtonGoogle from '../../images/butGgl.svg'

const Phone = () => {

    return (
        <section className="phone">
            <div className="phone__container">
                <div className="phone__content">
                    <div className="phone__text">
                        <h2 className="phone__title">
                            DOWNLOAD APP &
                            GET THE VOUCHER!
                        </h2>
                        <p className="phone__desc">
                            Get 30% off for first transaction using
                            Rondovision mobile app for now.!
                        </p>
                        <div className="phone__btn-wrapper">
                            <button className="phone__btn">
                                <Image src={ButtonApple} alt='button apple' />
                            </button>
                            <button className="phone__btn">
                                <Image src={ButtonGoogle} alt='button google' />
                            </button>
                        </div>
                    </div>
                    <div className="phone__img">
                        <Image
                            src={phoneImg}
                            alt='girl' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Phone;