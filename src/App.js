import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router, } from "react-router";
import Login from './views/Login';
import MenteeHomePage from './views/Mentee';
import history from './history';
import AuthComponent from './components/AuthComponent';
function App() {

  return (
    <Router history={history} forceRefresh={true} >
      <Switch>
        <Route exact path='/'><MenteeHomePage /></Route>

        <Route path='/auth/:type' component={Login} />
        <AuthComponent>
          <Route exact path='/metee'>Mentee Page</Route>
        </AuthComponent>

      </Switch>
    </Router>
  );
}

export default App;
