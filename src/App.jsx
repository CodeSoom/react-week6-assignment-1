import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
      </ul>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>이것은 어바웃 페이지</p>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
}
