import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddFeatures from './Components/Dashboard/AddFeatures/AddFeatures';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import FeaturedList from './Components/Dashboard/FeautredList/FeaturedList';
import AddAmin from './Components/Dashboard/AddAdmin/AddAmin';
import ManageService from './Components/Dashboard/ManageService/ManageService';


export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <h1 className="text-center">Name:{loggedInUser.name}</h1>

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/addFeatures">
                <AddFeatures></AddFeatures>
            </PrivateRoute>

            <PrivateRoute path="/addReview">
                <AddReview></AddReview>
            </PrivateRoute>

            <PrivateRoute path="/featuredList">
                <FeaturedList></FeaturedList>
            </PrivateRoute>

            <PrivateRoute path="/addAdmin">
                <AddAmin></AddAmin>
            </PrivateRoute>

            <PrivateRoute path="/manageService">
                <ManageService></ManageService>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

          </Switch>
        </Router>

      </UserContext.Provider>


    </div>
  );
}

export default App;
