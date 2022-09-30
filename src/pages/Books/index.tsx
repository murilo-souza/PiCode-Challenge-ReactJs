import { CarModel } from "../../components/CardModel";
import { Container } from "./styles";
import { Badge } from "../../components/Badge";
import { Books as BooksIcon } from "phosphor-react";
import { Header } from "../../components/Header";

export function Books() {
  return (
    <Container>
      <Header registerTypeName="+ Cadastrar livro" />
      <section>
        <CarModel
          title="Crepusculo"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
        <CarModel
          title="Crepusculo"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
        <CarModel
          title="Crepusculo"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
        <CarModel
          title="Crepusculo: Lua nova"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
        <CarModel
          title="Crepusculo"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
        <CarModel
          title="Crepusculo"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
        <CarModel
          title="Crepusculo"
          subtitle="Eleonora"
          icon={<BooksIcon size={45} color="#e1e1e6" />}
        >
          <Badge title="Diponível" quantity={5} />
          <Badge title="Páginas" quantity={500} />
          <Badge title="Retirados" quantity={4} />
        </CarModel>
      </section>
    </Container>
  );
}
