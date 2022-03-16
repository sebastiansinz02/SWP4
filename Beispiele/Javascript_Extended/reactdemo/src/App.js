import "./App.css";
import Vote from "./components/Vote";

function App() {
  return (
    <div className="App">
      <h1 class="heading"> My Stuff</h1>
      <Vote candidate="Sebi" address="Doren" />
      <Vote candidate="Manni" address="Reuthe " />
      <Vote candidate="Eric" address="Doren" />
    </div>
  );
}

export default App;
