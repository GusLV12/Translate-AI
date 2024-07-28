import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./assets/constants";
import { IconReturn } from "./components/IconReturn";
import { LanguageSelector } from "./components/LanguageSelector";
import { SeccionType } from "./assets/type.d";
import { TextArea } from "./components/TextArea";
import { useEffect } from "react";
import { translate } from "./services/translate";

function App() {
  const {
    fromLanguage,
    toLanguage,
    result,
    fromText,
    loading,
    interChangeLanguage,
    setFromLanguages,
    setToLanguages,
    setFromText,
    setResult,
  } = useStore();
  console.log({ fromLanguage });

  useEffect(() => {
    if (fromText === "") return;

    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result) => {
        if (result == null) return;
        setResult(result);
      })
      .catch(() => setResult("Error"));
  }, [fromText]);

  return (
    <Container fluid>
      <h1>Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SeccionType.From}
              value={fromLanguage}
              onChange={setFromLanguages}
            />
            <TextArea
              type={SeccionType.From}
              value={fromText}
              onChange={setFromText}
              loading={loading}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            onClick={interChangeLanguage}
            disabled={fromLanguage === AUTO_LANGUAGE}
          >
            <IconReturn />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              value={toLanguage}
              type={SeccionType.To}
              onChange={setToLanguages}
            />
            <TextArea
              type={SeccionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
