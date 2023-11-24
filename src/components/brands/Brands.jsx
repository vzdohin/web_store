'use client';

import './brands.css';
import Image from 'next/image';
import Hm from '../../images/hm.svg';
import Obey from '../../images/Obey.svg';
import Shopify from '../../images/Shopify.svg';
import Lacoste from '../../images/Lacoste.svg';
import Levis from '../../images/Levis.svg';
import Amazon from '../../images/Amazon.svg';
const Brands = () => {

    return (
        <section className="brands">
            <ul className="brands__container">
                <li className="brands__logo">
                    <a href="#">
                        <Image 
                        src={Hm} 
                        alt='hm logo' />
                    </a>
                </li>
                <li className="brands__logo">
                    <a href="#">
                        <Image src={Obey} alt='obey logo' />
                    </a>
                </li>
                <li className="brands__logo">
                    <a href="#">
                        <Image src={Shopify} alt='snopify logo' />
                    </a>
                </li>
                <li className="brands__logo">
                    <a href="#">
                        <Image src={Lacoste} alt=' lacoste logo' />
                    </a>
                </li>
                <li className="brands__logo">
                    <a href="#">
                        <Image src={Levis} alt='levis logo' />
                    </a>
                </li>
                <li className="brands__logo">
                    <a href="#">
                        <Image src={Amazon} alt='amazon logo' />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Brands;