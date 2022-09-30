import { Container } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

interface Props {
  registerTypeName: string;
}

export function Header({ registerTypeName }: Props) {
  return (
    <Container>
      <div>
        <input placeholder="Pesquise aqui" />
        <button>
          <MagnifyingGlass size={32} color="#e1e1e6" />
        </button>
      </div>
      <button>{registerTypeName}</button>
    </Container>
  );
}
