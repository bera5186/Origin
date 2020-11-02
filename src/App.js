
import Login from './components/Login'
import Room from './components/Room'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'



function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Login}  />
          <Route path='/room' exact component={Room}  />
          </Switch>
        </Router>
  );
}

export default App;
