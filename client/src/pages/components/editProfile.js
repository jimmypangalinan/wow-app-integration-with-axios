import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { Button, Modal, Form, Alert } from "react-bootstrap";

function EditProfile() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Modal
        show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => {
          setShow(false);
        }}
      >
        <Form className="p-4">
          <h3 className="fw-bold py-3">Edit Profile</h3>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="text" name="gender" placeholder="Gender" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="text" name="phone" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="text" name="address" placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <input
              class="form-control"
              type="file"
              id="formFile"
              title="Photo Profile"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
      <Button
        variant="danger px-5 d-grid   mx-auto"
        onClick={() => {
          setShow(true);
        }}
      >
        Edit Profile
      </Button>
    </div>
  );
}

export default EditProfile;
