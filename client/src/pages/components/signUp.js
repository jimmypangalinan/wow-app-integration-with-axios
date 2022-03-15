import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//component bootstrap
import { Button, Modal, Form } from 'react-bootstrap';

// import data useContex
import { UserContextModal } from '../../context/userContextModal';

function SignUp() {
  const [state, dispatch] = useContext(UserContextModal);
  console.log(state);

  const closeModalSignUp = () => {
    dispatch({
      type: 'SHOW',
      payload: {
        signIn: false,
        signUp: false,
      },
    });
  };

  const showModalSignUp = () => {
    dispatch({
      type: 'SHOW',
      payload: {
        signIn: false,
        signUp: true,
      },
    });
  };

  const showModalSignInHere = () => {
    dispatch({
      type: 'SHOW',
      payload: {
        signIn: true,
        signUp: false,
      },
    });
  };

  const navigate = useNavigate();

  function toAfterLoginAfterSignUp() {
    navigate('/afterlogin');
  }

  return (
    <div>
      <Modal show={state.show.signUp} size="md" aria-labelledby="contained-modal-title-vcenter" centered onHide={closeModalSignUp}>
        <Form className="p-4">
          <h3 className="fw-bold py-3">Sign Up</h3>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="danger" type="submit" onClick={toAfterLoginAfterSignUp}>
              Sign Up
            </Button>
          </div>
          <div className="text-center mt-2">
            <p>
              Already have an account ? Klik{' '}
              <span className="text-decoration-none text-black fw-bold " onClick={showModalSignInHere} style={{ cursor: 'pointer' }}>
                Here
              </span>
            </p>
          </div>
        </Form>
      </Modal>
      <Button variant="danger px-5 fw-bold " onClick={showModalSignUp}>
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
