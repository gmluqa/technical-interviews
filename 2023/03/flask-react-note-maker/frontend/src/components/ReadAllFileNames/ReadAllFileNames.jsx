import { useState } from "react";
import { readAllFileNames } from "../../services/apiCalls/readAllFileNames.js";
import EventMessage from "../EventMessage/EventMessage";
import Button from "react-bootstrap/Button";

const ReadAllFileNames = () => {
  const [eventMessage, setEventMessage] = useState({
    message: "",
    variant: "",
  });

  const eventMessageHandler = (apiMessage, apiVariant) => {
    setEventMessage({
      ...eventMessage,
      message: apiMessage,
      variant: apiVariant,
    });
  };

  const arrayToList = arr => {
    return (
      <ul>
        {arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    );
  };

  const readFileNamesHandler = async () => {
    let resp = await readAllFileNames();
    let list = arrayToList(resp.message);
    eventMessageHandler(list, resp.variant);
  };

  return (
    <>
      <Button variant="secondary" onClick={readFileNamesHandler}>
        Obtener todos archivos por nombre!
      </Button>
      <ul>
        {eventMessage.message ? (
          <EventMessage
            message={eventMessage.message}
            variant={eventMessage.variant}
          ></EventMessage>
        ) : null}
      </ul>
    </>
  );
};

export default ReadAllFileNames;
