import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import {Link, NavLink, BrowserRouter, Route, RoutesSwitch, Routes, withRouter } from "react-router-dom";
import Funciones from './funciones/Funciones';
import Favs from './components/Favs';
import MustWathc from './components/MustWatch';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/Home" element={<Home/>} />
            <Route path="/BlogList" element={<BlogList/>} />
            <Route path="/BlogPost" element={<BlogPost/>} />
            <Route path="/Favs" element={<Favs/>} />
            <Route path="/MustWathc" element={<MustWathc/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
