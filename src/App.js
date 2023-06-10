import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Roadmap />
    </>
  );
}

export default App;
