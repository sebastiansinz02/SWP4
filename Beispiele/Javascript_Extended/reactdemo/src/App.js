import "./App.css";
import SupperButton from "./components/SupperButton";
import List from "./components/List";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Liste</h1>
      <List />
      <h1>Button</h1>
      <SupperButton />
      <h1>Card</h1>
      <Card />
    </div>
  );
}

export default App;
