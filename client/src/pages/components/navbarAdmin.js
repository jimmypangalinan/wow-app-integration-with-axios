import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Navbar, Dropdown } from "react-bootstrap";

import "../../style/navbar.css";

// assets
import Logo from "../../assets/icon-wow.png";
import IconProfile from "../../assets/icon-people.png";
import IconAddBook from "../../assets/add-book-icon.png";
import IconLogOut from "../../assets/logout-icon.png";

function NavbarComponent() {
  const navigate = useNavigate();

  function handleToAddBook() {
    navigate("/addBook");
  }

  function handleToLogOut() {
    navigate("/");
  }

  return (
    <div>
      <Navbar bg="danger">
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              onClick={handleToLogOut}
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Dropdown className="toggle">
              <Dropdown.Toggle
                variant=""
                className="shadow-none"
                id="dropdown-basic"
              >
                <img
                  src={IconProfile}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="mt-2 dropdown-menu-center">
                <Dropdown.Item className="fw-bold">
                  <img
                    src={IconAddBook}
                    className="me-3 my-2"
                    onClick={handleToAddBook}
                  />{" "}
                  Add Book
                </Dropdown.Item>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <Dropdown.Item className="fw-bold text-danger">
                  <img
                    src={IconLogOut}
                    onClick={handleToLogOut}
                    className="me-3 my-2"
                  />{" "}
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
