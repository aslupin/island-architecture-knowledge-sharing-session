import {Router, Route} from 'preact-router';

import PageI from './pages/pageI';
import PageIIWithHydration from './pages/pageII-progressive-hydration';

export const App = () => (
  <Router>
    <Route path="/" component={PageI} />
    <Route path="/page2" component={PageIIWithHydration} />
  </Router>
)

