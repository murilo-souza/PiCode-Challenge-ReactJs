import { Container } from "./styles";
import Modal from "react-modal";
import { X, Student } from "phosphor-react";
import { BookListContent } from "../BookListContent";
import { Button } from "../Button";
import { useState } from "react";
import { BooksAvailableListModal } from "../BooksAvailableListModal";

interface StudentDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function StudentDetailsModal({
  isOpen,
  onRequestClose,
}: StudentDetailsModalProps) {
  const [isBookListOpen, setIsBookListOpen] = useState(false);
  function handleOpenBookListModal() {
    setIsBookListOpen(true);
  }

  function handleCloseBookListModal() {
    setIsBookListOpen(false);
  }

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
        <BooksAvailableListModal
          isOpen={isBookListOpen}
          onRequestClose={handleCloseBookListModal}
        />
        <header>
          <Student size={60} color="#e1e1e6" />
          <div>
            <strong>Murilo Leme de Souza</strong>
            <p>ID: 190188</p>
          </div>
        </header>
        <section>
          <header>
            <p>Lista de livros retirados</p>
            <strong>Máx. 4</strong>
          </header>
          <BookListContent
            title="Crepusculo"
            onClick={() => {}}
            type="remove"
            titleButton="Remover"
          />
        </section>
        <Button
          title="Adicionar"
          onClick={handleOpenBookListModal}
          type="add"
        />
      </Container>
    </Modal>
  );
}
