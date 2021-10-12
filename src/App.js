import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router, } from "react-router";
import Login from './views/Login';
import MenteeHomePage from './views/Mentee';
import history from './history';
import AuthComponent from './components/AuthComponent';
import ManageUserPage from './views/Admin/ManageUserPage';
import MentorLayout from './views/Mentor/Layout';
import MentorHomePage from './views/Mentor';
import SearchPage from './views/Mentee/SearchPage';
import MenteeLayout from './views/Mentee/MenteeLayout';
import MentorProfilePage from './views/Mentee/MentorProfile';

function App() {

  return (
    <Router history={history} forceRefresh={true} >
      <Switch>
        <Route exact path='/'><MenteeHomePage /></Route>
        <Route path='/auth/:type' component={Login} />
        {/* <Route path='/mentee/search' component={SearchPage} /> */}
        <Route path={['/mentee', '/mentee/search']} >
          <MenteeLayout>
            <Route path='/mentee/' exact>
              <MenteeHomePage />
            </Route>
            <Route path='/mentee/search' component={SearchPage} />
            <Route path='/mentee/profile' component={MentorProfilePage} />
          </MenteeLayout>
        </Route>

        <Route path='/mentor'>
          <MentorHomePage />
        </Route>

        <Route exact path='/admin'><ManageUserPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
