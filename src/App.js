import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import UserDetails from './UserDetails'
import Header from './components/Header'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  const [user, setUser] = useState({});
  const handleEvent = (e) => e.target.value&&setUser( {...user, [e.target.id]: e.target.value});

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <UserDetails data={user} handleEvent={handleEvent}/>
        </Route>
        <Route path='/resume'>
          <Header gree={user}/>
        </Route>

      </Switch>
    </Router>
  );
}