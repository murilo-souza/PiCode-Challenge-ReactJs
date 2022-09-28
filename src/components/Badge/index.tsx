import { Container } from "./styles";

interface Props {
  title: string;
  quantity: number;
}

export function Badge({ title, quantity }: Props) {
  return (
    <Container>
      <p>{title}</p>
      <p>{quantity}</p>
    </Container>
  );
}
