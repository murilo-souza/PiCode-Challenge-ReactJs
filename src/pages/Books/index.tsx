import { CarModel } from "../../components/CardModel";
import { Container } from "./styles";
import { Badge } from "../../components/Badge";
import { Books as BooksIcon } from "phosphor-react";
import { Header } from "../../components/Header";
import { useState } from "react";
import { BookModal } from "../../components/BookModal";
import { useRegister } from "../../hooks/useRegister";

export function Books() {
  const [isNewRegisterModalOpen, setIsNewRegisterModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { books } = useRegister();

  function handleOpenNewRegisterModal() {
    setIsNewRegisterModal(true);
    setIsUpdating(false);
  }

  function handleOpenEditRegisterModal() {
    setIsNewRegisterModal(true);
    setIsUpdating(true);
  }

  function handleCloseModal() {
    setIsNewRegisterModal(false);
  }

  return (
    <Container>
      <Header
        registerTypeName="+ Cadastrar livro"
        onOpenRegisterModal={handleOpenNewRegisterModal}
      />
      <BookModal
        isOpen={isNewRegisterModalOpen}
        onRequestClose={handleCloseModal}
        isUpdating={isUpdating}
      />
      <section>
        {books.map((book) => (
          <CarModel
            key={book.id}
            title={book.title}
            subtitle={book.author}
            icon={<BooksIcon size={45} color="#e1e1e6" />}
            onClick={handleOpenEditRegisterModal}
          >
            <Badge title="Diponível" quantity={book.quantity} />
            <Badge title="Páginas" quantity={book.pages} />
            <Badge title="Retirados" quantity={book.withdraw} />
          </CarModel>
        ))}
      </section>
    </Container>
  );
}
