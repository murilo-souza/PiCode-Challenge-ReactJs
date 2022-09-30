import Modal from "react-modal";
import { X } from "phosphor-react";
import { Container } from "./styles";

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isUpdating?: boolean;
}

export function BookModal({
  isOpen,
  onRequestClose,
  isUpdating = false,
}: BookModalProps) {
  function handleNewBook() {
    alert("New Register Book");
  }
  function handleEditBook() {
    alert("New Edit Book");
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
        <h1>{isUpdating ? "Editar livro" : "Cadastrar livro"}</h1>
        <input placeholder="Titulo do livro" />
        <input placeholder="Nome do autor" />
        <input placeholder="Quantidade de livros" />
        <input placeholder="Quantidade de paginas" />
        {isUpdating && <input placeholder="Livros retirados" />}

        <button onClick={isUpdating ? handleEditBook : handleNewBook}>
          {isUpdating ? "Editar Livro" : "Cadastrar Livro"}
        </button>
      </Container>
    </Modal>
  );
}
