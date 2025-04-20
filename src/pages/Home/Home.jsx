import Header from '../../components/header/Header';
import Hero from '../../components/Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <Hero />
            </div>
        </>
    )
}
export default Home