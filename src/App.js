import "./App.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DefaultLogo from "./DefaultLogo.jpg";
import Button from "react-bootstrap/Button";
import { submit } from "./app.services";
import { useEffect, useState } from "react";
import { Audio, Circles } from "react-loader-spinner";
function App() {
  const [audioText, setAudioText] = useState("");
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {});
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  function handleSubmit() {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    submit(formData).then((data) => {
      console.log(data);
      setAudioText(data["Transcription Text"]);
      setLoading(false);
    });
  }
  return (
    <div className="App">
      <header>
        <div className="header">
          <Col>
            <span className="image">
              <img src={DefaultLogo} alt="logo" height={25} width={25} />
            </span>
            <span className="logoName">WEBLOG</span>
          </Col>
        </div>
      </header>

      <div className="layout">
        {loading ? (
          <Circles
            height="80"
            width="80"
            radius="9"
            color="#61dafb"
            ariaLabel="loading"
          />
        ) : (
          <div>
            <Row>
              <Col>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Upload File</Form.Label>
                    <Form.Control type="file" onChange={handleChange} />
                  </Form.Group>
                </Form>
                <Form>
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form>
                <div className="textArea">
                  <Form.Label htmlFor="textArea">Words</Form.Label>
                  <Form.Control as="textarea" rows="3" value={audioText} />
                </div>
              </Col>
              <Col></Col>
            </Row>
            <Row></Row>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
