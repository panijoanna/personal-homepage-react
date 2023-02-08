import Header from "./features/Header";
import Section from "./common/Section";
import Portfolio from "./features/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Section title="My skillset inculded" />
      <Section title="What I want to learn next" />
      <Portfolio />
    </>
  );
}

export default App;
