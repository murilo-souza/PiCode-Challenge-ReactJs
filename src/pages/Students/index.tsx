import { Badge } from "../../components/Badge";
import { CarModel } from "../../components/CardModel";
import { Header } from "../../components/Header";
import { Container } from "./styled";
import { Student } from "phosphor-react";
import { useCallback, useState } from "react";
import { StudentRegisterModal } from "../../components/StudentRegisterModal";
import { StudentDetailsModal } from "../../components/StudentDetailsModal";
import { useRegister } from "../../hooks/useRegister";
import { Loading } from "../../components/Loading";

export function Students() {
  const [isStudentRegisterModalOpen, setIsStudentRegisterModalOpen] =
    useState(false);
  const [isStudentDetailsModalOpen, setIsStudentDetailsModalOpen] =
    useState(false);

  const { students, getStudentIdToEdit, loading } = useRegister();

  const handleOpenStudentDetailsModal = useCallback(
    (id: string) => {
      getStudentIdToEdit(id);
      setIsStudentDetailsModalOpen(true);
    },
    [getStudentIdToEdit]
  );

  return (
    <Container>
      <Header
        registerTypeName="+ Cadastrar aluno"
        onOpenRegisterModal={() => setIsStudentRegisterModalOpen(true)}
      />
      <StudentRegisterModal
        isOpen={isStudentRegisterModalOpen}
        onRequestClose={() => setIsStudentRegisterModalOpen(false)}
      />
      <StudentDetailsModal
        isOpen={isStudentDetailsModalOpen}
        onRequestClose={() => setIsStudentDetailsModalOpen(false)}
      />
      {loading ? (
        <Loading />
      ) : (
        students.map((student) => (
          <CarModel
            key={student.id}
            title={student.name}
            subtitle={`ID: ${student.ID}`}
            icon={<Student size={45} color="#e1e1e6" />}
            onClick={() => handleOpenStudentDetailsModal(student.id)}
          >
            <Badge title="Livros retirados" quantity={4} />
          </CarModel>
        ))
      )}
    </Container>
  );
}
