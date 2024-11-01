import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleRemNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const diff = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(diff));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleMultNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const product = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(product));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleDivNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      if (currentNumber !== '0') {
        const quotient = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(quotient));
        setOperation('');
        setFirstNumber('0');
      } else {
        setCurrentNumber("Erro");  // Evita divisão por zero
      }
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleRemNumber();
          break;
        case '*':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultNumber} />
          <Button label="/" onClick={handleDivNumber} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="." onClick={() =>handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleRemNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
