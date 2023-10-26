import { Button } from "react-bootstrap";

const ButtonStyle1 = ({ text, onClick }) => {
  return (
    <Button variant="success" size="md" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonStyle1;
