import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";



export const UserContext = createContext();

function App() {
  // Global State for new user and loggedin user
  const [loggedInUser, setLoggedInUser] = useState({});
  const [verifyMsg, setVerifyMsg] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    fName: "",
    lName: "",
    email: "",
    password: "",
    cPassword: "",
    error: "",
    success: false,
  });
  return (
    <UserContext.Provider
      value={{
        loggedUser: [loggedInUser, setLoggedInUser],
        userState: [user, setUser],
        verifyLink: [verifyMsg, setVerifyMsg],
      }}
    >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />{" "}
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
