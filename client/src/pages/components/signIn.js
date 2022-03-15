import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//component bootstrap
import { Button, Modal, Form } from 'react-bootstrap';

// import data useContex
import { UserContextModal } from '../../context/userContextModal';
import { DataUserLogin } from '../../context/dataUserLogin';

function Login() {
  // data user login
  const [user, setUser] = useContext(DataUserLogin);
  console.log('data user' + user.userLogin);

  //  to halaman afterlogin
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/afterlogin');
  }

  // useContext
  const [state, dispatch] = useContext(UserContextModal);
  console.log(state);

  const closeModalLogin = () => {
    dispatch({
      type: 'SHOW',
      payload: {
        signIn: false,
        signUp: false,
      },
    });
  };

  const showModalLogin = () => {
    dispatch({
      type: 'SHOW',
      payload: {
        signIn: true,
        signUp: false,
      },
    });
    setUser({
      type: 'LOGIN',
      userLogin: true,
      payload: {
        user: {
          name: 'jimmi',
          mail: 'jimmii',
        },
      },
    });
  };

  const showModalSignUpHere = () => {
    dispatch({
      type: 'SHOW',
      payload: {
        signIn: false,
        signUp: true,
      },
    });
  };

  return (
    <>
      <Modal show={state.show.signIn} size="md" aria-labelledby="contained-modal-title-vcenter" centered onHide={closeModalLogin}>
        <Form className="p-4">
          <h3 className="fw-bold py-3">Sign In</h3>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="danger fw-bold" type="submit" onClick={handleLogin}>
              Sign In
            </Button>
          </div>
          <div className="text-center mt-2">
            <p>
              Don't have an account ? Klik{' '}
              <span className="text-black fw-bold" onClick={showModalSignUpHere} style={{ cursor: 'pointer' }}>
                Here
              </span>
            </p>
          </div>
        </Form>
      </Modal>
      <Button variant="btn-ligth px-5 fw-bold" onClick={showModalLogin} style={{ backgroundColor: '#CDCDCD' }}>
        Sign In
      </Button>
    </>
  );
}

export default Login;
