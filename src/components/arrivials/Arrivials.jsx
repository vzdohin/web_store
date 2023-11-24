
import Card from '../card/card';
import './arrivials.css';
import cat1 from '../../images/cat1.jpg'
import cat2 from '../../images/cat2.jpg'
import cat3 from '../../images/cat3.jpg'

const Arrivials = () => {
    return (
        <section className="arrivials">
            <div className="arrivials__container">
                <h2 className="arrivials__header">NEW ARRIVALS</h2>
                <div className="arrivials__cards">
                    <Card 
                    title="Hoodies & Sweetshirt"
                    img={cat1}/>
                    <Card 
                    title="Coats & Parkas"
                    img={cat2}/>
                    <Card 
                    title="Tees & T-Shirt"
                    img={cat3}/>
                    
                </div>
            </div>

        </section>
        )
}

export default Arrivials;