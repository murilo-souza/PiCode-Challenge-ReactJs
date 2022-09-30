import Modal from "react-modal";
import { X } from "phosphor-react";
import { Container } from "./styles";

interface StudentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function StudentRegisterModal({
  isOpen,
  onRequestClose,
}: StudentModalProps) {
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
        <h1>Cadastrar Aluno</h1>
        <input placeholder="Nome completo do aluno" />
        <input placeholder="ID do aluno" />
        <button>Cadastrar Aluno</button>
      </Container>
    </Modal>
  );
}
