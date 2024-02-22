
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header></Header>
            <Checkout />
          </Route>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
        </Switch>
    
      </div>
    </Router>
  );
}

export default App;
