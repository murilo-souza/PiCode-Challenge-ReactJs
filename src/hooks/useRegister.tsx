import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../service/firebase";

interface Book {
  id?: any;
  title: string;
  author: string;
  quantity: number;
  pages: number;
  withdraw: number;
}

interface Student {
  id?: any;
  name: string;
  ID: string;
}

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextData {
  loading: boolean;
  books: Book[];
  students: Student[];
  bookRegister: (bookInfo: Book) => void;
  studentRegister: (studentInfo: Student) => void;
  getBookIdToEdit: (id: string) => void;
  getStudentIdToEdit: (id: string) => void;
  bookSelectedById: string;
  studentSelectById: string;
}

export const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

export function RegisterProvider({ children }: RegisterProviderProps) {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[] | any>([]);
  const [students, setStudents] = useState<Student[] | any>([]);
  let [bookSelectedById, setBookSelectedById] = useState("");
  let [studentSelectById, setStudentSelectById] = useState("");

  const db = getFirestore(app);
  const booksCollectionRef = collection(db, "books");
  const studentsCollectionRef = collection(db, "students");

  async function bookRegister({
    title,
    author,
    quantity,
    pages,
    withdraw,
  }: Book) {
    await addDoc(booksCollectionRef, {
      title,
      author,
      quantity,
      pages,
      withdraw,
    });
  }

  async function getBooks() {
    setLoading(true);
    const data = await getDocs(booksCollectionRef);
    const dataFormatted = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setBooks(dataFormatted);

    setLoading(false);
  }

  async function getBookIdToEdit(id: string) {
    setBookSelectedById(id);
  }

  async function studentRegister({ name, ID }: Student) {
    await addDoc(studentsCollectionRef, {
      ID,
      name,
    });
  }

  async function getStudents() {
    setLoading(true);

    const data = await getDocs(studentsCollectionRef);
    const dataFormatted = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setStudents(dataFormatted);
    setLoading(false);
  }

  async function getStudentIdToEdit(id: string) {
    setStudentSelectById(id);
  }

  useEffect(() => {
    getBooks();
    getStudents();
  }, []);

  return (
    <RegisterContext.Provider
      value={{
        loading,
        books,
        bookRegister,
        getBookIdToEdit,
        bookSelectedById,
        studentRegister,
        getStudentIdToEdit,
        students,
        studentSelectById,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);

  return context;
}
