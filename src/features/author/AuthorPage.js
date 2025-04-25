import { Container } from "../../styled";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section title="Agnieszka Szajnowska"
      body={
        <>
          <p>Jestem skutecznym i proaktywnym Kierownikiem Projektu z <b>7-letnim doświadczeniem</b>. Potrafię dbać o relacje z klientami jak i swoim zespołem. Wiem jak zażądzać czasem i ludźmi.</p>
          <p>Prywatnie uwielbiam czytać książki i pokonywać kilometry na moim rowerze.</p>
        </>
      }
    />
  </Container>
);