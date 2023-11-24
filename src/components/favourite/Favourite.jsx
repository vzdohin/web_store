
import Card from '../card/card';
import './favourite.css';
import fav1 from '../../images/fav1.jpg'
import fav2 from '../../images/fav2.jpg'


const Favourite = () => {
    return (
        <section className="favourite">
            <div className="favourite__container">
                <h2 className="favourite__header">Young’s Favourite</h2>
                <div className="favourite__cards">
                    <Card 
                    title="Trending on instagram"
                    img={fav1}/>
                    <Card 
                    title="All Under $40"
                    img={fav2}/>

                    
                </div>
            </div>

        </section>
        )
}

export default Favourite;