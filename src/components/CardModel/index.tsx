import { Container } from "./styled";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  subtitle: string;
  children: ReactNode;
  onClick: () => void;
}

export function CarModel({ icon, title, subtitle, children, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <section>
        <section>{icon}</section>
        <div>
          <strong>{title}</strong>
          <p>{subtitle}</p>
        </div>
      </section>
      <footer>{children}</footer>
    </Container>
  );
}
