import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';
import Erro from './pages/Erro'


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/>}></Route>
            <Route path="/About" element={ <About/> } />
            <Route path="/Team" element={ <Team/>} />
            <Route path='/Contact' element={<Contact />}/>
            <Route path="*" element={ <Erro/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>

    )
}
export default RoutesApp;
