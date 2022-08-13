import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard />
        </div>
      </section>
    </div>
  );
}

export default App;
