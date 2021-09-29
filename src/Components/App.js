import Nav from './Nav';
import Signin from './Signin';
import Signup from './Signup';
import HomePage from './HomePage';
import MyPosts from './MyPosts';
import PostItem from './PostItem';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/myposts" component={MyPosts}/>
          <Route path="/postitem" component={PostItem}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
