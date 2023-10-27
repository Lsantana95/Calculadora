import React, { useState } from "react";
import styled from "styled-components";

const Calculadora = () => {
  const [resultado, setResultado] = useState("");

  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.name));
  };
  const limparCampo = () => {
    setResultado("");
  };
  const backspace = () => {
    setResultado(resultado.slice(0, -1));
  };
  const calculo = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch (err) {
      setResultado("Error");
    }
  };

  return (
    <CalculadoraContainer>
      <Input type="text" value={resultado} />
      <Keypad>
        <Button className="highlight" onClick={limparCampo} id="clear">
          Clear
        </Button>
        <Button className="highlight" onClick={backspace} id="backspace">
          C
        </Button>
        <Button name="/" onClick={handleClick}>
          &divide;
        </Button>
        <Button name="7" onClick={handleClick}>
          7
        </Button>
        <Button name="8" onClick={handleClick}>
          8
        </Button>
        <Button name="9" onClick={handleClick}>
          9
        </Button>
        <Button className="highlight" name="*" onClick={handleClick}>
          &times;
        </Button>
        <Button name="4" onClick={handleClick}>
          4
        </Button>
        <Button name="5" onClick={handleClick}>
          5
        </Button>
        <Button name="6" onClick={handleClick}>
          6
        </Button>
        <Button className="highlight" name="-" onClick={handleClick}>
          &ndash;
        </Button>
        <Button name="1" onClick={handleClick}>
          1
        </Button>
        <Button name="2" onClick={handleClick}>
          2
        </Button>
        <Button name="3" onClick={handleClick}>
          3
        </Button>
        <Button className="highlight" name="+" onClick={handleClick}>
          +
        </Button>
        <Button name="0" onClick={handleClick}>
          0
        </Button>
        <Button name="." onClick={handleClick}>
          .
        </Button>
        <Button className="highlight" onClick={calculo} id="resultado">
          =
        </Button>
      </Keypad>
    </CalculadoraContainer>
  );
};

const CalculadoraContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1px;
  border: 2px solid black;
  border-radius: 16px;
  margin-left: 90%;
  width: 80%;

  @media (max-width: 768px) {
    max-width: 800px;
    margin: 0.4em 0.4em 0.4em 0.4em;
    margin-left: 4%;
  }
`;

const Input = styled.input`
  grid-column: span 4;
  background-color: #ccc;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.9rem;
  }
`;

const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 24px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &.highlight {
    background-color: #ff5733;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Calculadora;
