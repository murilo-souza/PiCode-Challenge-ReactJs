import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { app } from "../service/firebase";

interface Book {
  id?: string;
  title: string;
  author: string;
  quantity: number;
  pages: number;
  withdraw: number;
}

interface Student {
  id?: string;
  name: string;
  ID: string;
}

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextData {
  books: Book[];
  students: Student[];
  bookRegister: (bookInfo: Book) => void;
  studentRegister: (studentInfo: Student) => void;
}

export const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

export function RegisterProvider({ children }: RegisterProviderProps) {
  const [books, setBooks] = useState<Book[] | any>([]);
  const [students, setStudents] = useState<Student[] | any>([]);

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

  async function studentRegister({ name, ID }: Student) {
    await addDoc(studentsCollectionRef, {
      ID,
      name,
    });
  }

  async function getBooks() {
    const data = await getDocs(booksCollectionRef);
    const dataFormatted = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setBooks(dataFormatted);
  }

  async function getStudents() {
    const data = await getDocs(studentsCollectionRef);
    const dataFormatted = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setStudents(dataFormatted);
  }

  useEffect(() => {
    getBooks();
    getStudents();
  }, []);

  return (
    <RegisterContext.Provider
      value={{ books, bookRegister, studentRegister, students }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);

  return context;
}
