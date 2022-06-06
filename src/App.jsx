import { Switch, Route, Link } from 'react-router-dom';

import About from './About';
import Homepage from './Homepage';
import RestaurantPage from './RestaurantPage';
import NotFound from './NotFound';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </header>

      {/* 실제컨텐츠만 swtich로 */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/restaurant" component={RestaurantPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
