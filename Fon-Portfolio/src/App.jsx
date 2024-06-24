// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
