import { Container } from "./styles";
import { Books as BooksIcon } from "phosphor-react";
import { Button } from "../Button";

interface BookListContentProps {
  title: string;
  onClick: () => void;
  type: "add" | "remove";
  titleButton: string;
}

export function BookListContent({
  onClick,
  title,
  type,
  titleButton,
}: BookListContentProps) {
  return (
    <Container>
      <div>
        <BooksIcon size={35} color="#e1e1e6" />
        <strong>{title}</strong>
      </div>
      <Button onClick={onClick} title={titleButton} type={type} />
    </Container>
  );
}
