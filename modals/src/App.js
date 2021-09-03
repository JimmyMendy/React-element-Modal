import { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./components/globalStyles";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Button onClick={modalHandler}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export default App;
