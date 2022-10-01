import Modal, { OnAfterOpenCallbackOptions } from "react-modal";
import { X } from "phosphor-react";
import { Container } from "./styles";
import { useRegister } from "../../hooks/useRegister";
import { useState, FormEvent } from "react";

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isUpdating?: boolean;
  // book: Book;
}

interface Book {
  title: string;
  author: string;
  quantity: number;
  pages: number;
  withdraw: number;
}

export function BookModal({
  isOpen,
  onRequestClose,
  isUpdating = false,
}: BookModalProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pages, setPages] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const { bookRegister } = useRegister();

  function handleNewBook(event: FormEvent) {
    event.preventDefault();

    bookRegister({
      title,
      author,
      quantity,
      pages,
      withdraw,
    });

    setTitle("");
    setAuthor("");
    setQuantity(0);
    setPages(0);
    setWithdraw(0);
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
        <label>Titulo</label>
        <input
          placeholder="Titulo do livro"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Autor</label>
        <input
          placeholder="Nome do autor"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label>Livros disponíveis</label>
        <input
          placeholder="Quantidade de livros diponíveis"
          value={quantity}
          type="number"
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <label>Páginas</label>
        <input
          placeholder="Quantidade de paginas"
          value={pages}
          type="number"
          onChange={(event) => setPages(Number(event.target.value))}
        />
        {isUpdating && (
          <>
            <label>Livros retirados</label>
            <input
              placeholder="Livros retirados"
              value={withdraw}
              type="number"
              onChange={(event) => setWithdraw(Number(event.target.value))}
            />
          </>
        )}

        <button onClick={isUpdating ? handleEditBook : handleNewBook}>
          {isUpdating ? "Editar Livro" : "Cadastrar Livro"}
        </button>
      </Container>
    </Modal>
  );
}
