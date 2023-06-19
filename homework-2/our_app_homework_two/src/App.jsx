import "./App.css";
import AppComp from "./Components/App/AppComponent.jsx";
import AppAcademy from "./Components/App/AppAcademies.jsx";
import Counter from "./Components/Counter/CounterComponent.jsx";
function App() {
  return (
    <div className="App">
      <AppComp />
      <hr />
      <AppAcademy />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
