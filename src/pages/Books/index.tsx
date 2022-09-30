import { CarModel } from "../../components/CardModel";
import { Container } from "./styles";
import { Badge } from "../../components/Badge";
import { Books as BooksIcon } from "phosphor-react";
import { Header } from "../../components/Header";
import { useState } from "react";
import { BookModal } from "../../components/BookModal";

export function Books() {
  const [isNewRegisterModalOpen, setIsNewRegisterModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

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
        <CarModel
          title="Crepusculo"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
          onClick={handleOpenEditRegisterModal}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
      </section>
    </Container>
  );
}
