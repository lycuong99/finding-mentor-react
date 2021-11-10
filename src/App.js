import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router, } from "react-router";
import Login from './views/Login';
import MenteeHomePage from './views/Mentee';
import history from './history';
import AuthComponent from './components/AuthComponent';
import ManageUserPage from './views/Admin/ManageUserPage';
import MentorLayout from './components/Layout/MentorLayout';
import MentorHomePage from './views/Mentor';
import SearchPage from './views/Mentee/SearchPage';
import MenteeLayout from './views/Mentee/MenteeLayout';
import MentorProfilePage from './views/Mentee/MentorProfile';
import CourseDetailPage from './views/Mentee/CourseDetailPage';
import BecomeMentorPage from './views/Mentor/BecomeMentorPage';
import CoursesManagementPage from './views/Mentor/CoursesManagementPage';
import CourseCreaterPage from './views/Mentor/CourseEditor/CourseCreaterPage';
import CourseEditPage from './views/Mentor/CourseEditor/CourseEditPage';
import AdditionalInformationAfterSignUp from './views/AdditionalInformationAfterSignUp';
import EditProfilePage from './views/Mentor/EditProfilePage';

function App() {

  return (
    <Router history={history} forceRefresh={true} >
      <Switch>
        <Route exact path='/'><MenteeHomePage /></Route>
        <Route path='/auth/:type' component={Login} />
        <Route path='/additional-info' component={AdditionalInformationAfterSignUp} />
        {/* <Route path='/mentee/search' component={SearchPage} /> */}
        <Route path={['/mentee', '/mentee/search']} >
          <MenteeLayout>
            <Route path='/mentee/' exact>
              <MenteeHomePage />
            </Route>
            <Route path='/mentee/search' component={SearchPage} />
            <Route path='/mentee/profile/:id' component={MentorProfilePage} />
            <Route path='/mentee/course/:id' component={CourseDetailPage} />
          </MenteeLayout>
        </Route>
        <Route path='/mentor/apply' exact>
          <BecomeMentorPage />
        </Route>
        <Route path={['/mentor']} >
          <MentorLayout>
            <Route path={['/mentor', '/mentor/course']} exact>
              <CoursesManagementPage />
            </Route>
            <Route path='/mentor/course/new' exact>
              <CourseCreaterPage />
            </Route>
            <Route path='/mentor/course/edit/:id' exact>
              <CourseEditPage />
            </Route>
            <Route path='/mentor/profile' exact>
              <EditProfilePage />
            </Route>
          </MentorLayout>
        </Route>




        <Route path='/mentor' exact>
          <MentorHomePage />
        </Route>

        <Route exact path='/admin'><ManageUserPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
