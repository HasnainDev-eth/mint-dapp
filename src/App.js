import Navbar from "./components/Navbar";
import Story from "./components/Story"
import Roadmap from "./components/Roadmap"
import Team from "./components/Team";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Apeclub from "./components/ApeClub";
import Hero from "./components/Hero"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Apeclub/>
      <Story />
      <Roadmap />
      <Team />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
