// All imports
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import useToken from "../../hooks/useTokens";
import Loading from "../Loading/Loading";
import "./Login.css";

// Login functionality
const Login = () => {
  // All states

  const [sendPasswordResetEmail, sending, reseterror] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookuser, facebookloading, facebookerror] =
    useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || googleuser || facebookuser);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Signin with google functionality

  if (token || googleuser) {
    navigate(from, { replace: true });
  }
  if (googleloading) {
    <Loading></Loading>;
  }
  if (googleerror) {
    toast("something went worng");
  }

  // Signin with facebook functionality

  if (token || facebookuser) {
    navigate(from, { replace: true });
  }
  if (facebookloading) {
    <Loading></Loading>;
  }
  if (facebookerror) {
    toast("something went worng");
  }

  // Sign in with email and password functionality
  const handleUserSignIn = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };
  if (loading) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    toast("something went worng!");
  }

  // Password reset functionality

  const SendPasswordReset = (event) => {
    event.preventDefault();
    if (reseterror) {
      return (
        <div>
          <p>Error: {reseterror.message}</p>
        </div>
      );
    }
    if (sending) {
      return <p>Sending...</p>;
    }
    if (email) {
      sendPasswordResetEmail(email);
      toast("Check your email");
    } else {
      toast("Please enter email address");
    }
  };

  // field handling
  const handleEmailBlur = (event) => {
    const emailRegex = /\S+@\S+\.\S+/.test(event.target.value);
    if (emailRegex) {
      setEmail(event.target.value);
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "❌ Invalid Email" });
      setEmail("");
    }
  };

  const handlePasswordBlur = (event) => {
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        event.target.value
      );
    if (passRegex) {
      setPassword(event.target.value);
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "❌ Invalid Password" });
      setPassword("");
    }
  };

  return (
    <div className="">
      <h2 className="text-center pt-4 mt-4 text-primary">
        Welcome to FreshFeel.com! Please Login...
      </h2>
      <div className="form-container mx-auto mt-5 mb-5">
        <Form className="form-body mx-auto" onSubmit={handleUserSignIn}>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {errors?.email && <p>{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                onBlur={handlePasswordBlur}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="position-absolute top-50 end-0 translate-middle-y"
                style={{ cursor: "pointer" }}
              >
                🗝
              </p>
            </div>
            <Form.Text
              className="text-muted"
              title="An uppercase letter a lowercase letter a special character and a Number and more then 6 character"
            >
              Password must contain minimum...
            </Form.Text>
            {errors?.password && <p>{errors.password}</p>}
          </Form.Group>

          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}

          <Button
            className="login mb-3 d-flex justify-content-center align-items-center border border-0"
            variant="primary"
            type="submit"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="mx-1">Login</span>
          </Button>
          <div className="google-siginn d-flex">
            <hr className="w-50" />
            <p className="w-25 text-center border rounded-3">Or</p>
            <hr className="w-50" />
          </div>
          <br />
          <div className="social-login">
            <Button
              onClick={() => signInWithGoogle()}
              className="mb-3 d-flex justify-content-around align-items-center login border-0"
              variant="primary"
              type="submit"
            >
              <i className="fa-brands fa-google googlelogo"></i>
              <span>Login With Google.</span>
            </Button>
            <br />
            <Button
              onClick={() => signInWithFacebook()}
              className="mb-3 d-flex justify-content-around align-items-center login border-0"
              variant="primary"
              type="submit"
            >
              <i className="fa-brands fa-facebook-f facebooklogo"></i>
              <span>Login With Facebook.</span>
            </Button>
          </div>
          <br />
          <Button
            onClick={SendPasswordReset}
            className="form-link ps-0"
            variant="link"
          >
            Forgot Password?
          </Button>
          <p>
            New Here?{" "}
            <Link className="form-link" to="/register">
              Create an account!
            </Link>
          </p>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default Login;
