import { Container } from "./styles";
interface ButtonProps {
  title: string;
  onClick: () => void;
  type: "add" | "remove";
}

export function Button({ title, onClick, type }: ButtonProps) {
  return (
    <Container onClick={onClick} typeButton={type}>
      {title}
    </Container>
  );
}
