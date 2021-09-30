import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/Login';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth/:type' component={Login} />
        <Route path='/'>Hello</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
