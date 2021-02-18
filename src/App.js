import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons";
import Clock from "./components/Clock/Clock";
import Navbar from "./components/Navbar/Navbar";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Clock></Clock>
      <TaskContainer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
