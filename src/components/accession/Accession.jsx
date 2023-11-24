import './accession.css';

const Accession = () => {

    return (
        <section className="accession">
            <h2 className="accession__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
            <p className="accession__desc">Type your email down below and be young wild generation</p>
            <form action="" className="accession__form">
                <input 
                type="text" 
                className="accession__input"
                placeholder='Add your email here'
                ></input>
                    <button className="accession__btn">SEND</button>
                
            </form>
        </section>
    );
};

export default Accession;