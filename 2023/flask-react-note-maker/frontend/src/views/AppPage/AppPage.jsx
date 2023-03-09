import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CreateNewRecord from "../../components/CreateNewRecord/CreateNewRecord";
import ReadFileContentByName from "../../components/ReadFileContentByName/ReadFileContentByName";
import ReadAllFileNames from "../../components/ReadAllFileNames/ReadAllFileNames";

const AppPage = () => {
  return (
    <Container className="mt-5">
      <Col>
        <Row>
          <CreateNewRecord />
        </Row>
        <Row>
          <ReadFileContentByName />
        </Row>
        <Row>
          <ReadAllFileNames />
        </Row>
      </Col>
    </Container>
  );
};

export default AppPage;
