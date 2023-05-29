import React from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Advantage from './components/Advantage';
import Products from './components/Products';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <Services/>
            <About/>
            <Advantage/>
            <Products/>
            <Portfolio/>
        </div>
    );
}

export default App;
