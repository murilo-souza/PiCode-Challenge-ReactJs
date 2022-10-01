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

  const { books, getBookIdToEdit } = useRegister();

  function handleOpenNewRegisterModal() {
    setIsNewRegisterModal(true);
    setIsUpdating(false);
  }

  function handleOpenEditRegisterModal(d: any) {
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
            onClick={() =>
              handleOpenEditRegisterModal(getBookIdToEdit(book.id))
            }
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
