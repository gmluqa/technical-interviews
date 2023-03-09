import { useState } from "react";
import { readFileContentByName } from "../../services/apiCalls/readFileContentByName.js";
import EventMessage from "../EventMessage/EventMessage";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const ReadFileContentByName = () => {
  const [eventMessage, setEventMessage] = useState({
    message: "",
    variant: "",
  });

  const [inputResource, setInputResource] = useState({
    name: "",
  });

  const onChange = e => {
    const value = e.target.value;
    setInputResource({
      ...inputResource,
      [e.target.name]: value,
    });
  };

  const eventMessageHandler = (apiMessage, apiVariant) => {
    setEventMessage({
      ...eventMessage,
      message: apiMessage,
      variant: apiVariant,
    });
  };

  const readResourceHandler = async () => {
    let resp = await readFileContentByName(inputResource.name);
    eventMessageHandler(resp.message, resp.variant);
  };

  return (
    <>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
        <Form.Control
          placeholder="Nombre del archivo"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="name"
          onChange={onChange}
        />

        <Button variant="secondary" onClick={readResourceHandler}>
          Leer contenido!
        </Button>
      </InputGroup>
      {eventMessage.message ? (
        <EventMessage
          message={eventMessage.message}
          variant={eventMessage.variant}
        ></EventMessage>
      ) : null}
    </>
  );
};

export default ReadFileContentByName;
