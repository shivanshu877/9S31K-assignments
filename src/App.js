import "./App.css";
import Header from "./components/Header";
import Category from "./components/Category";
import Crousel from "./components/Crousel";
import BestSection from "./components/BestSection";
function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Crousel />
      <BestSection></BestSection>
    </div>
  );
}

export default App;
