import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router, } from "react-router";
import Login from './views/Login';
import MenteeHomePage from './views/Mentee';
import history from './history';
import AuthComponent from './components/AuthComponent';
import ManageUserPage from './views/Admin/ManageUserPage';

function App() {

  return (
    <Router history={history} forceRefresh={true} >
      <Switch>
        <Route exact path='/'><MenteeHomePage /></Route>
        <Route path='/auth/:type' component={Login} />

        <Route exact path='/mentor'>Mentee Page</Route>


        <Route exact path='/admin'><ManageUserPage /></Route>





      </Switch>
    </Router>
  );
}

export default App;
