import { Container } from "./styled";
import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function CarModel({ title, subtitle, children }: Props) {
  return (
    <Container>
      <head>
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </head>
      <section>{children}</section>
    </Container>
  );
}
