import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { API } from "../../config/api";

// useContext
import { UserContextModal } from "../../context/userContextModal";
import { DataUserLogin } from "../../context/dataUserLogin";
import { UserContextToken } from "../../context/useContextToken";

function Login() {
  const [user, setUser] = useContext(DataUserLogin);
  const [token, setToken] = useContext(UserContextToken);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/login", body, config);
      console.log(response);

      setToken({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });

      // Notification
      if (response.data.data.role == "admin") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        navigate("/transaction");
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        navigate("/afterLogin");
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed !!
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  // useContext
  const [state, dispatch] = useContext(UserContextModal);
  console.log(state);

  const closeModalLogin = () => {
    dispatch({
      type: "SHOW",
      payload: {
        signIn: false,
        signUp: false,
      },
    });
  };

  const showModalLogin = () => {
    dispatch({
      type: "SHOW",
      payload: {
        signIn: true,
        signUp: false,
      },
    });
    setUser({
      type: "LOGIN",
      userLogin: true,
      payload: {
        user: {
          name: "jimmi",
          mail: "jimmii",
        },
      },
    });
  };

  const showModalSignUpHere = () => {
    dispatch({
      type: "SHOW",
      payload: {
        signIn: false,
        signUp: true,
      },
    });
  };

  return (
    <>
      <Modal
        show={state.show.signIn}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={closeModalLogin}
      >
        <Form className="p-4" onSubmit={handleSubmit}>
          <h3 className="fw-bold py-3">Sign In</h3>
          {message && message}
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="danger fw-bold" type="submit">
              Sign In
            </Button>
          </div>
          <div className="text-center mt-2">
            <p>
              Don't have an account ? Klik{" "}
              <span
                className="text-black fw-bold"
                onClick={showModalSignUpHere}
                style={{ cursor: "pointer" }}
              >
                Here
              </span>
            </p>
          </div>
        </Form>
      </Modal>
      <Button
        variant="btn-ligth px-5 fw-bold"
        onClick={showModalLogin}
        style={{ backgroundColor: "#CDCDCD" }}
      >
        Sign In
      </Button>
    </>
  );
}

export default Login;
