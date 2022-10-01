import { Container } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../Button";
import { useState, useEffect } from "react";

interface Props {
  registerTypeName: string;
  onOpenRegisterModal: () => void;
}

export function Header({ registerTypeName, onOpenRegisterModal }: Props) {
  const [search, setSearch] = useState("");

  useEffect(() => {}, []);

  return (
    <Container>
      <div>
        <input
          placeholder="Pesquise aqui"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <MagnifyingGlass size={32} color="#e1e1e6" />
        </button>
      </div>
      <Button
        title={registerTypeName}
        onClick={onOpenRegisterModal}
        type="add"
      />
    </Container>
  );
}
