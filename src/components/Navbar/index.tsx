import { Container } from "./styled";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export function Navbar() {
  return (
    <Container>
      <NavLink to="/">
        <img src={Logo} alt="Logo PiCode" />
      </NavLink>
      <div>
        <NavLink to="/" className="NavLink">
          Livros
        </NavLink>
        <NavLink to="/students" className="NavLink">
          Alunos
        </NavLink>
      </div>
    </Container>
  );
}
