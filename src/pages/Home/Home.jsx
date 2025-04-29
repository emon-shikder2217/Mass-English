import Header from '../../components/header/Header';
import Hero from '../../components/Hero/Hero';
import Timeline from '../../components/TimeLine/TimeLine';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <Hero />
                <Timeline />
            </div>
        </>
    )
}
export default Home