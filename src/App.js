import React from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <Services/>
            <About/>
        </div>
    );
}

export default App;
