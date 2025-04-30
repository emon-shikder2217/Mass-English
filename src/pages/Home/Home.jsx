import Header from '../../components/header/Header';
import Hero from '../../components/Hero/Hero';
import Instructure from '../../components/LeadInstructure/Instructure';
import Review from '../../components/ReviewPage/Review';
import Timeline from '../../components/TimeLine/TimeLine';
import './Home.css';


const Home = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <Hero />
                <Timeline />
                <Instructure />
                <Review />
            </div>
        </>
    )
}
export default Home;