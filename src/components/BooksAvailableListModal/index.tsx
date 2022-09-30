import { Container } from "./styles";
import Modal from "react-modal";
import { X } from "phosphor-react";
import { BookModal } from "../BookModal";
import { BookListContent } from "../BookListContent";

interface ListAvailableBooksModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function BooksAvailableListModal({
  isOpen,
  onRequestClose,
}: ListAvailableBooksModal) {
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
        <BookListContent
          title="Crepusculo"
          onClick={() => {}}
          type="add"
          titleButton="Adicionar"
        />
        <BookListContent
          title="Crepusculo"
          onClick={() => {}}
          type="add"
          titleButton="Adicionar"
        />
        <BookListContent
          title="Crepusculo"
          onClick={() => {}}
          type="add"
          titleButton="Adicionar"
        />
        <BookListContent
          title="Crepusculo"
          onClick={() => {}}
          type="add"
          titleButton="Adicionar"
        />
      </Container>
    </Modal>
  );
}
