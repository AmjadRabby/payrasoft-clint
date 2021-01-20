import React, { useState, useContext, useEffect, createContext } from "react";
import "./Login.css";
import logo from "../../images/logo.png";
import { Form, Button, Container, Col } from "react-bootstrap";
import { FaSistrix, FaFacebook, FaGoogle } from "react-icons/fa";

// import FacebookIcon from "@material-ui/icons/Facebook";
// import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import {
  initLoginFramework,
  handleGoogleSignIn,
  handleFBSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  resetPassword,
} from "./LoginManager";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import MainNav from "../Home/Header/Navbar/MainNav";

// export const UserContext = createContext();

const Login = () => {
  // Get data from context API
  const { loggedUser, userState, verifyLink } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = loggedUser;
  const [user, setUser] = userState;
  const [verifyMsg, setVerifyMsg] = verifyLink;

  // Other state
  const [newUser, setNewUser] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorFirebase, setErrorFirebase] = useState("");
  const [resetPasswordForm, setResetPasswordForm] = useState(false);
  const [isResetLink, setIsResetLink] = useState(false);

  // State for user login input data
  const [loginUser, setLoginUser] = useState({
    userEmail: "",
    userPassword: "",
  });
  const { userEmail, userPassword } = loginUser;

  // Destructuring user state
  const { fName, email, password } = user;

  // Initialize firebase/login framework
  initLoginFramework();

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, redirect) => {
    setErrorFirebase(res.error);
    setUser(res);
    setLoggedInUser(res);
    // Redirect when signed in
    if (redirect) history.replace(from);
  };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFBSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation on confirm password
    if (pass === confirmPassword) {
      // For new user sign up / create account
      if (newUser && email && password) {
        createUserWithEmailAndPassword(fName, email, password).then((res) => {
          handleResponse(res, true);
          if (res.success) {
            setVerifyMsg(true);
          }
        });
      }
    } else {
      handleError("Oops!..Password not matched. Please try again");
    }

    // For old users sign in / login
    if (!newUser && userEmail && userPassword) {
      signInWithEmailAndPassword(userEmail, userPassword).then((res) => {
        handleResponse(res, true);
      });
    }

    // Reset Password for old user
    if (!newUser && userEmail && !userPassword) {
      resetPassword(userEmail).then(() => setIsResetLink(true));
    }
  };

  const handleError = (msg, duraction = 5000) => {
    setErrorMessage(msg);
    // Disable message button after 5 seconds automatically
    setInterval(() => {
      setErrorMessage("");
    }, duraction);
  };

  const handleBlur = (e) => {
    let isFieldValid = true;

    // Email validation with Regex
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      if (!isFieldValid) {
        handleError("Please enter a valid email.", 5000);
      }
    }

    // Password validation with Regex
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const hasNumber = /\d{1}/.test(e.target.value);
      setPass(e.target.value);
      isFieldValid = isPasswordValid && hasNumber;
      if (!isFieldValid) {
        handleError("Password must be 1 char, 1 latter and 7 length", 10000);
      }
    }

    if (e.target.name === "cPassword") {
      const isPasswordValid = e.target.value.length > 6;
      const hasNumber = /\d{1}/.test(e.target.value);
      setConfirmPassword(e.target.value);
      isFieldValid = isPasswordValid && hasNumber;
      if (pass !== confirmPassword) {
        handleError("Oops...! Password is not matched. Continue trying", 3000);
      }
    }

    // Update user state
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }

    // Update loginUser input data state to login
    if (e.target.name === "userEmail" || e.target.name === "userPassword") {
      const userInfo = { ...loginUser };
      userInfo[e.target.name] = e.target.value;
      setLoginUser(userInfo);
    }
  };

  return (
    <section className="mb-5 bg-light">
      <Container>
        {/* <MainNav /> */}
        <div className="text-center pt-5">
          <Link to="/">
            <img className="img-fluid w-25  login-logo" src={logo} alt="" />
          </Link>
        </div>

        <Form className="login-form shadow bg-white" onSubmit={handleSubmit}>
          {errorFirebase && (
            <Form.Group>
              <Button className="w-100" variant="outline-danger">
                {" "}
                {errorFirebase}{" "}
              </Button>
            </Form.Group>
          )}
          {errorMessage !== "" && (
            <Form.Group>
              <Button className="w-100" variant="outline-danger">
                {" "}
                {errorMessage}{" "}
              </Button>
            </Form.Group>
          )}
          {newUser ? (
            <>
              <h3 className="brand-color text-center">Create an account</h3>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  name="fName"
                  type="text"
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  name="lName"
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  name="cPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Button className="w-100 brand-color-bg" variant="" type="submit">
                Create an account
              </Button>
              <Form.Text className="text-muted text-center">
                Already have an account?{" "}
                <button
                  onClick={() => setNewUser(!newUser)}
                  style={{
                    border: "none",
                    background: "none",
                  }}
                  className="mt-3 font-weight-bold brand-color"
                >
                  Login
                </button>
              </Form.Text>
            </>
          ) : !resetPasswordForm || isResetLink ? (
            <>
              {isResetLink && (
                <Form.Group>
                  <Button className="w-10 brand-color" variant="outline-danger">
                    {" "}
                    Password reset link is sent to your mail. Please check your
                    email{" "}
                  </Button>
                </Form.Group>
              )}
              <h3 className="brand-color text-center">Login</h3>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  type="text"
                  name="userEmail"
                  placeholder="Username or Email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  type="password"
                  name="userPassword"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Text className="text-right">
                    <button
                      onClick={() => setResetPasswordForm(!resetPasswordForm)}
                      className="reset-password-btn brand-color font-weight-bold"
                    >
                      Forgot Password
                    </button>
                  </Form.Text>
                </Form.Group>
              </Form.Row>
              <Button className="w-100 brand-color-bg" type="submit">
                Login
              </Button>
              <Form.Text className="text-muted text-center mt-3">
                Don't have an account?{" "}
                <button
                  onClick={() => setNewUser(!newUser)}
                  style={{
                    border: "none",
                    background: "none",
                    color: "orange",
                  }}
                  className="brand-color font-weight-bold"
                >
                  Create an account
                </button>
              </Form.Text>
            </>
          ) : (
            <>
              <h3>Reset Password</h3>
              <Form.Group>
                <Form.Control
                  onBlur={handleBlur}
                  type="text"
                  name="userEmail"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Text className="text-left">
                    If you remember password, try login
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Text className="text-right">
                    <button
                      onClick={() => setResetPasswordForm(!resetPasswordForm)}
                      className="reset-password-btn"
                    >
                      Login
                    </button>
                  </Form.Text>
                </Form.Group>
              </Form.Row>
              <Button className="w-100" variant="warning" type="submit">
                Reset Password
              </Button>
              <Form.Text className="text-muted text-center">
                Don't have an account?{" "}
                <button
                  onClick={() => setNewUser(!newUser)}
                  style={{
                    border: "none",
                    background: "none",
                    color: "orange",
                  }}
                >
                  Create an account
                </button>
              </Form.Text>
            </>
          )}
        </Form>

        <div className="signin-btn mt-3">
          Or <br />
          <Button
            className="bg-white shadow border-0 sign-btn"
            // onClick={fbSignIn}
          >
            {" "}
            <FaFacebook className="login-icon" />
            Continue with Facebook
          </Button>{" "}
          <br />
          <Button
            className="bg-white shadow border-0  sign-btn"
            // onClick={googleSignIn}
          >
            {" "}
            <FaGoogle className="login-icon" />
            Continue with Google
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Login;
