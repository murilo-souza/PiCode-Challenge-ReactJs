import { Container } from "./styles";
import Modal from "react-modal";
import { X } from "phosphor-react";
import { BookListContent } from "../BookListContent";
import { useRegister } from "../../hooks/useRegister";

interface ListAvailableBooksModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function BooksAvailableListModal({
  isOpen,
  onRequestClose,
}: ListAvailableBooksModal) {
  const { books } = useRegister();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" onClick={onRequestClose}>
        <X size={32} color="#e1e1e6" />
      </button>
      <Container>
        <h1>Lista de livros disponível</h1>
        {books.map((book) => {
          const bookTitleFormated = book.title.slice(0, 20) + "...";
          return (
            <BookListContent
              title={bookTitleFormated}
              onClick={() => {}}
              type="add"
              titleButton="Adicionar"
            />
          );
        })}
      </Container>
    </Modal>
  );
}
