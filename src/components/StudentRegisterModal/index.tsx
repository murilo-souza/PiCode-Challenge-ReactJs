import Modal from "react-modal";
import { X } from "phosphor-react";
import { Container } from "./styles";
import { useRegister } from "../../hooks/useRegister";
import { useState, FormEvent } from "react";
interface StudentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function StudentRegisterModal({
  isOpen,
  onRequestClose,
}: StudentModalProps) {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");

  const { studentRegister } = useRegister();

  function handleStudentRegister(event: FormEvent) {
    event.preventDefault();

    studentRegister({
      name,
      ID,
    });

    setName("");
    setID("");
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
        <h1>Cadastrar Aluno</h1>
        <input
          placeholder="Nome completo do aluno"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          placeholder="ID do aluno"
          value={ID}
          onChange={(event) => setID(event.target.value)}
          required
          maxLength={6}
        />
        <button onClick={handleStudentRegister}>Cadastrar Aluno</button>
      </Container>
    </Modal>
  );
}
