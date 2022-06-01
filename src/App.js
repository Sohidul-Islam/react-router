// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>

          </ul>

          <hr />

          {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}>

            </Route>
            <Route path="/about" element={<About />}>

            </Route>
            <Route path="/friends" element={<Friends />}>

            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
