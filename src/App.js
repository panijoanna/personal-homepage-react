import Header from "./features/Header";
import Section from "./common/Section";
import Portfolio from "./features/Portfolio";
import { Wrapper } from "./common/Wrapper/styled";

function App() {
  return (
    <Wrapper>
      <Header />
      <Section title="My skillset inculded" />
      <Section title="What I want to learn next" />
      <Portfolio />
    </Wrapper>
  );
}

export default App;
