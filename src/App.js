import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router,  } from "react-router";
import Login from './views/Login';
import MenteeHomePage from './views/Mentee';
import history from './history';

function App() {

  return (
    <Router history={history} forceRefresh={true} >
      <Switch>
        <Route exact path='/'><MenteeHomePage /></Route>
        <Route path='/auth/:type' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
