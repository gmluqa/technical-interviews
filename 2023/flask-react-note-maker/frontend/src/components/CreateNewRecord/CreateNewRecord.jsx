import { useState } from "react";
import { createNewRecord } from "../../services/apiCalls/createNewRecord";
import EventMessage from "../EventMessage/EventMessage";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const CreateNewRecord = () => {
  const [eventMessage, setEventMessage] = useState({
    message: "",
    variant: "",
  });

  const [inputResource, setInputResource] = useState({
    name: "",
    content: "",
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
    setTimeout(() => {
      setEventMessage({
        message: "",
        variant: "",
      });
    }, 1500);
  };

  const createResourceHandler = async () => {
    let resp = await createNewRecord(inputResource.name, inputResource.content);
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
        <InputGroup.Text>Contenido</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          name="content"
          onChange={onChange}
        />
        <Button variant="secondary" onClick={createResourceHandler}>
          Crear!
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

export default CreateNewRecord;
