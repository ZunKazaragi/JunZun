import React from 'react';
import {BrowserRouter as Router,Link, Route, Switch} from 'react-router-dom';
import './App.css';
import banner from './banner-1.png';
import Home from './page/Home';
import About from './page/About';

const routes = [
  {
    path: "/",
    exact: true,
    pageTitle: () => <p>Home</p>,
    main: () => <Home/>
  },
  {
    path: "/",
    pageTitle: () => <p>About</p>,
    main: () => <About />
  }
]

function App() {
  return (
    <Router>
    <div className="App">
      <div className="banner-left"></div>
      <div className="banner-right"></div>
      <div className="page">
      <header className="header">
        <div className="web-title">
        JunZun
        </div>
        <nav className="navigation-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/links">Links</Link></li>
          </ul>
        </nav>
      </header>
      <div className="banner">
        <img className="banner-img" src={banner}/>
        <div className="page-title">
          <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.pageTitle/>}
            />
          ))}
          </Switch>
        </div>
      </div>

      <div id="search-bar" className="search-bar">
          <form>
            <input type="text" className="zun-input" placeholder="Search article in this web"></input>
            <button className="zbtn btn-primary">Search</button>
          </form>
        </div>
        
      <div id="Content" className="content">
        <div className="main-bar">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main/>}
              />
            ))}
          </Switch>
        </div>
        <div className="side-bar">
          <h2 className="color-white">Social Media</h2>
          <ul className="socialmedia-list">
            <li><a href="#" className="socialmedia-button fb">Facebook</a></li>
            <li><a href="#" className="socialmedia-button ig">Instagram</a></li>
            <li><a href="#" className="socialmedia-button tw">Twitter</a></li>
          </ul>
       </div>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
