import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const Accordionitem = (props) => {
  const data = props.data;
  return (
    <Accordion.Item eventKey={data.key}>
      <Accordion.Header>
        <span className="me-4">{data.heading}</span>
      </Accordion.Header>
      <Accordion.Body>
        <p>{data.text}</p>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Accordionitem;