import React from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>home...</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>about...</p>
  </div>
);

const Accessibility = () => (
  <div>
    <h2>Accessibility</h2>
    <p>accessibility...</p>
  </div>
);

const Colors = () => (
  <div>
    <h2>Colors</h2>
    <p>colors...</p>
  </div>
);

const Components = () => (
  <div>
    <h2>Components</h2>
    <p>components...</p>
  </div>
);

const App = () => {
  return (
    <div>
      <header>
        <h1>Research Design</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/accessibility">Accessibility</Link>
            </li>
            <li>
              <Link to="/colors">Colors</Link>
            </li>
            <li>
              <Link to="/components">Components</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/colors" component={Colors} />
        <Route path="/components" component={Components} />
      </main>
    </div>
  );
};

export default App;
