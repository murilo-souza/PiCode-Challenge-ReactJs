import { Container } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../Button";

interface Props {
  registerTypeName: string;
  onOpenRegisterModal: () => void;
}

export function Header({ registerTypeName, onOpenRegisterModal }: Props) {
  return (
    <Container>
      <div>
        <input placeholder="Pesquise aqui" />
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
