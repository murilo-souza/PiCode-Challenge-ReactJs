import { Container } from "./styles";
import Modal from "react-modal";
import { X, Student } from "phosphor-react";
import { BookListContent } from "../BookListContent";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { BooksAvailableListModal } from "../BooksAvailableListModal";
import { useRegister } from "../../hooks/useRegister";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../service/firebase";
import { Loading } from "../Loading";

interface StudentDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface StudentProps {
  name: string;
  ID: string;
}

export function StudentDetailsModal({
  isOpen,
  onRequestClose,
}: StudentDetailsModalProps) {
  const [loading, setLoading] = useState(false);
  const [isBookListOpen, setIsBookListOpen] = useState(false);
  const [student, setStudent] = useState({} as StudentProps | any);
  const { studentSelectById } = useRegister();

  function handleOpenBookListModal() {
    setIsBookListOpen(true);
  }

  function handleCloseBookListModal() {
    setIsBookListOpen(false);
  }

  async function getStudentData() {
    setLoading(true);

    const db = getFirestore(app);
    const docRef = doc(db, "students", studentSelectById);
    await getDoc(docRef).then((studentSelected) =>
      setStudent(studentSelected.data())
    );
    setLoading(false);
  }

  useEffect(() => {
    getStudentData();
  }, [isOpen]);

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
        {loading ? (
          <Loading />
        ) : (
          <>
            <header>
              <Student size={60} color="#e1e1e6" />
              <div>
                <strong>{student.name}</strong>
                <p>{`ID: ${student.ID}`}</p>
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
          </>
        )}
      </Container>
    </Modal>
  );
}
