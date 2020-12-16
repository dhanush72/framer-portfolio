import AboutPage from "./pages/AboutPage";
import ServcesPage from "./pages/ServicesPage";
import FaqPage from "./pages/FaqPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutPage />
      <ServcesPage />
      <FaqPage />
    </>
  );
}

export default App;
