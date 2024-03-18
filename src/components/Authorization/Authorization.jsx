import Header from './Header/Header';
import MainEl from './MainEl/MainEl';
import Footer from './Footer/Footer';
import TopButton from './TopButton/TopButton';
import { Route, Router, Routes } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <Header />
            <MainEl />
            <TopButton />
            <Footer />
        </>
    );
}
