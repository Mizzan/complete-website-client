import { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Deals from './components/Deals/Deals';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import CheckoutOrder from './components/CheckoutOrder/CheckoutOrder';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <main>
            <Container>
              <PrivateRoute path="/admin">
                <Route path="/admin" component={Admin} />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Route path="/dashboard" component={Dashboard} />
              </PrivateRoute>
              <PrivateRoute path="/checkoutOrder/:serviceId">
                <CheckoutOrder />
              </PrivateRoute>
              <Route path="/deals" component={Deals} />
              <Route path="/login" component={Login} />
            </Container>
            <Route path="/" component={Home} exact />
          </main>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
