import './footer.css';
import Image from 'next/image';
import Fb from '../../images/icon-fb.svg'
import Inst from '../../images/icon-inst.svg'
import Tw from '../../images/icon-tw.svg'
import In from '../../images/icon-in.svg'

const Footer = () => {

    return (
        <section className="footer">
            <div className="footer__container">
                <div className="footer__description-container">
                    <h3 className="footer__title">FASHION</h3>
                    <p className="footer__desc">Complete your style with awesome clothes from us.</p>
                    <ul className="footer__social-links">
                        <li className="footer__social-link">
                            <a href="#" className="footer__social-link-icon"><Image src={Fb} alt='' /> </a>
                            <a href="#" className="footer__social-link-icon"><Image src={Inst} alt='' /> </a>
                            <a href="#" className="footer__social-link-icon"><Image src={Tw} alt='' /> </a>
                            <a href="#" className="footer__social-link-icon"><Image src={In} alt='' /> </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__links-container">
                    <ul className="footer__links">
                        <p className="footer__links-title">Company</p>
                        <li className="footer__link"><a className="footer__link_color">About</a></li>
                        <li className="footer__link"><a className="footer__link_color">Contact us</a></li>
                        <li className="footer__link"><a className="footer__link_color">Support</a></li>
                        <li className="footer__link"><a className="footer__link_color">Careers</a></li>
                    </ul>
                    <ul className="footer__links">
                        <p className="footer__links-title">Quick Link</p>
                        <li className="footer__link"><a className="footer__link_color">Share Location</a></li>
                        <li className="footer__link"><a className="footer__link_color">Orders Tracking</a></li>
                        <li className="footer__link"><a className="footer__link_color">Size Guide</a></li>
                        <li className="footer__link"><a className="footer__link_color">FAQs</a></li>
                    </ul>
                    <ul className="footer__links">
                        <p className="footer__links-title">Legal</p>
                        <li className="footer__link"><a className="footer__link_color">Terms & conditions</a></li>
                        <li className="footer__link"><a className="footer__link_color">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>


        </section>
    );
};

export default Footer;