import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import FourSteps from './components/FourSteps';
import AboutUs from './components/AboutUs';
import WhoWeHelp from './components/WhoWeHelp';
import Fundations from './components/Fundations'
import Organizations from './components/Organizations';
import Contact from './components/Contact';
import LoggedHome from './components/LoggedHome'
import { AuthProvider } from './components/auth'
import PrivateRoute from './components/PrivateRoute'
import LoggOut from './components/LoggOut';
import GiveThings from './components/GiveThings'
import FormStepTwo from './components/FormStepTwo'
import Admin from './components/Admin'
import PasswordChange from './components/PasswordChange';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/foursteps" component={FourSteps} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/whowehelp" component={WhoWeHelp} />
          <Route exact path="/fundations" component={Fundations} />
          <Route exact path="/organizations" component={Organizations} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/loggout" component={LoggOut} />
          <Route exact path="/givethings" component={GiveThings} />
          <Route exact path="/formsteptwo" component={FormStepTwo} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/passwordChange" component={PasswordChange} />
    
          <PrivateRoute exact path="/loggedhome" component={LoggedHome} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
