import Header from "./features/Header";
import Section from "./common/Section";
import Portfolio from "./features/Portfolio";
import { Wrapper } from "./common/Wrapper/styled";
import Footer from "./features/Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Section title="My skillset inculded" />
      <Section title="What I want to learn next" />
      <Portfolio />
      <Footer />
    </Wrapper>
  );
}

export default App;
