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
        <NavLink to="/books" className="NavLink" aria-activedescendant="active">
          Livros
        </NavLink>
        <NavLink
          to="/students"
          className="NavLink"
          aria-activedescendant="active"
        >
          Alunos
        </NavLink>
      </div>
    </Container>
  );
}
