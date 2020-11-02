
import Login from './components/Login'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'



function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Login}  />
          </Switch>
        </Router>
  );
}

export default App;
