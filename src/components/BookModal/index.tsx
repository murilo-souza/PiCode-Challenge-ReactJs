import Modal from "react-modal";
import { X } from "phosphor-react";
import { Container } from "./styles";
import { useRegister } from "../../hooks/useRegister";
import { useState, FormEvent, useEffect, useCallback } from "react";
import { app } from "../../service/firebase";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { Loading } from "../Loading";
interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isUpdating?: boolean;
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
  const [book, setBook] = useState({} as Book | any);

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pages, setPages] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const db = getFirestore(app);

  const { bookRegister, bookSelectedById } = useRegister();

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

  async function handleEditBook(event: FormEvent) {
    event.preventDefault();

    const docRef = doc(db, "books", bookSelectedById);

    setDoc(docRef, {
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

  async function getBookData() {
    setLoading(true);
    const db = getFirestore(app);
    const docRef = doc(db, "books", bookSelectedById);
    await getDoc(docRef).then((bookSelected) => setBook(bookSelected.data()));

    console.log(book);
    if (isUpdating) {
      setTitle(book.title);
      setAuthor(book.author);
      setQuantity(book.quantity);
      setPages(book.pages);
      setWithdraw(book.withdraw);
    } else {
      setTitle("");
      setAuthor("");
      setQuantity(0);
      setPages(0);
      setWithdraw(0);
    }

    setLoading(false);
  }

  useEffect(() => {
    getBookData();
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
      <Container onSubmit={isUpdating ? handleEditBook : handleNewBook}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>{isUpdating ? "Editar livro" : "Cadastrar livro"}</h1>
            <label>Titulo</label>
            <input
              placeholder="Nome do autor"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <label>Autor</label>
            <input
              placeholder="Nome do autor"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              required
            />
            <label>Livros disponíveis</label>
            <input
              placeholder="Quantidade de livros diponíveis"
              value={quantity}
              type="number"
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
            />
            <label>Páginas</label>
            <input
              placeholder="Quantidade de paginas"
              value={pages}
              type="number"
              onChange={(event) => setPages(Number(event.target.value))}
              required
            />
            {isUpdating && (
              <>
                <label>Livros retirados</label>
                <input
                  placeholder="Livros retirados"
                  value={withdraw}
                  type="number"
                  onChange={(event) => setWithdraw(Number(event.target.value))}
                  required
                />
              </>
            )}

            <button type="submit">
              {isUpdating ? "Editar Livro" : "Cadastrar Livro"}
            </button>
          </>
        )}
      </Container>
    </Modal>
  );
}
