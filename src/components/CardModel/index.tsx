import { Container } from "./styled";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function CarModel({ icon, title, subtitle, children }: Props) {
  return (
    <Container>
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
