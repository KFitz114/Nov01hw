import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import messages from './Components/Messages.js';
import posts from './Components/Posts.js';

function App() {
  return (
    <Router>
      <div className="overArching">
        <div className="links">
          <Link classname="link" to ="./"> Home </Link>
          <Link className="link" to ="./messages"> Messages </Link>
          <Link className="Link" to ="./posts"> Posts </Link>      
        </div>
        <div className="result.">
          <Switch>
            <Route exact path ='./'> Welcome </Route>
            <Route path ='./messages'> <Messages /> </Route>
            <Route path ='./posts'> <Posts /> </Route>
          </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;
