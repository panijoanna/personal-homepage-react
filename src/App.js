import Header from "./features/Header";
import Portfolio from "./features/Portfolio";
import { Wrapper } from "./common/Wrapper/styled";
import Footer from "./features/Footer";
import Skills from "./features/Skills";

function App() {
  return (
    <Wrapper>
      <Header />
      <Skills />
      <Portfolio />
      <Footer />
    </Wrapper>
  );
}

export default App;
