
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import DashBoard from './Dashboard/Dashboard';
import Students from './Students/Student';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <section>
          <Switch>
          <Route path="/dashboard" component = {DashBoard} />
          <Route path="/students" component = {Students} />

          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
