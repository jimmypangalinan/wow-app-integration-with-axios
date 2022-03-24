import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../pages/components/navbarUser";
import Contact from "./components/complain/contact";
import Chat from "./components/complain/chat";

export default function Complain() {
  const [contact, setContact] = useState(null);

  const dataContact = [
    {
      id: 1,
      name: "Admin",
      chat: "Yes, Is there anything I can help",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: 2,
      name: "Admin 2",
      chat: "Hello World",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  return (
    <>
      <Navbar />
      <Container fluid style={{ height: "89.5vh" }}>
        <Row>
          <Col
            md={3}
            style={{ height: "89.5vh" }}
            className="px-3 border-end border-dark overflow-auto"
          >
            <Contact
              dataContact={dataContact}
              setContact={setContact}
              contact={contact}
            />
          </Col>
          <Col md={9} style={{ maxHeight: "89.5vh" }} className="px-0">
            <Chat contact={contact} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
