
import Collection from '../components/Collection';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout/Layout';
import Newsletter from '../components/Newsletter';
// import './App.css';
// import Header from './Component/Header/Header';

function HomePage() {
  return (
    <>
    <Layout title="Baroque Official">
    <HeroSection/>
    <Collection/>
    <Newsletter/></Layout>
    </>
  );
}

export default HomePage;
