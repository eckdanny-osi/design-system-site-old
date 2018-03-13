import React from 'react';
import { Route, Link } from 'react-router-dom';
import Principles from './Principles';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      Welcome to the <abbr title="Child Welfare Digital Services">CWDS</abbr>{' '}
      design system!
    </p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Do you haz design system?</p>
  </div>
);

const Accessibility = () => (
  <div>
    <h2>Accessibility</h2>
    <p>
      Some <tt>a11y</tt> notes...
    </p>
  </div>
);

const Colors = () => (
  <div>
    <h2>Colors</h2>
    <p>Our color scheme and naming conventions</p>
  </div>
);

const Components = () => (
  <div>
    <h2>Components</h2>
    <p>
      Check out our awesome <a href="">component library</a> powered by
      Storybook!
    </p>
  </div>
);

const App = () => {
  return (
    <div>
      <header>
        <h1>Design System</h1>
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
              <Link to="/principles">Principles</Link>
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
        <Route path="/principles" component={Principles} />
      </main>
    </div>
  );
};

export default App;
