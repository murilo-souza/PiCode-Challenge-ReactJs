import { Badge } from "../../components/Badge";
import { CarModel } from "../../components/CardModel";
import { Header } from "../../components/Header";
import { Container } from "./styled";
import { Student } from "phosphor-react";
import { useState } from "react";
import { StudentRegisterModal } from "../../components/StudentRegisterModal";
import { StudentDetailsModal } from "../../components/StudentDetailsModal";
import { useRegister } from "../../hooks/useRegister";

export function Students() {
  const [isStudentRegisterModalOpen, setIsStudentRegisterModalOpen] =
    useState(false);
  const [isStudentDetailsModalOpen, setIsStudentDetailsModalOpen] =
    useState(false);

  const { students } = useRegister();

  function handleOpenStudentRegisterModal() {
    setIsStudentRegisterModalOpen(true);
  }

  function handleCloseStudentRegisterModal() {
    setIsStudentRegisterModalOpen(false);
  }

  function handleOpenStudentDetailsModal() {
    setIsStudentDetailsModalOpen(true);
  }

  function handleCloseStudentDetailsModal() {
    setIsStudentDetailsModalOpen(false);
  }
  return (
    <Container>
      <Header
        registerTypeName="+ Cadastrar aluno"
        onOpenRegisterModal={handleOpenStudentRegisterModal}
      />
      <StudentRegisterModal
        isOpen={isStudentRegisterModalOpen}
        onRequestClose={handleCloseStudentRegisterModal}
      />
      <StudentDetailsModal
        isOpen={isStudentDetailsModalOpen}
        onRequestClose={handleCloseStudentDetailsModal}
      />
      {students.map((student) => (
        <CarModel
          key={student.id}
          title={student.name}
          subtitle={`ID: ${student.ID}`}
          icon={<Student size={45} color="#e1e1e6" />}
          onClick={handleOpenStudentDetailsModal}
        >
          <Badge title="Livros retirados" quantity={4} />
        </CarModel>
      ))}
    </Container>
  );
}
