import Alert from "react-bootstrap/Alert";

const EventMessage = props => {
  return (
    <div>
      <Alert variant={props.variant}>{props.message}</Alert>
    </div>
  );
};

export default EventMessage;
