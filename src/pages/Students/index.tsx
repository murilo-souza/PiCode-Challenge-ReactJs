import { Badge } from "../../components/Badge";
import { CarModel } from "../../components/CardModel";
import { Header } from "../../components/Header";
import { Container } from "./styled";
import { Student } from "phosphor-react";
import { useState } from "react";
import { StudentRegisterModal } from "../../components/StudentRegisterModal";
import { StudentDetailsModal } from "../../components/StudentDetailsModal";

export function Students() {
  const [isStudentRegisterModalOpen, setIsStudentRegisterModalOpen] =
    useState(false);
  const [isStudentDetailsModalOpen, setIsStudentDetailsModalOpen] =
    useState(false);

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
      <CarModel
        title="Murilo Leme de Souza"
        subtitle="ID: 190188"
        icon={<Student size={45} color="#e1e1e6" />}
        onClick={handleOpenStudentDetailsModal}
      >
        <Badge title="Livros retirados" quantity={4} />
      </CarModel>
    </Container>
  );
}
