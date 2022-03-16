import "./App.css";
import Vote from "./components/Vote";

function App() {
  return (
    <div className="App">
      <h1 class="heading"> My Stuff</h1>
      <div class="container">
        <Vote candidate="Sebi" address="Doren" />
        <Vote candidate="Manni" address="Reuthe " />
        <Vote candidate="Eric" address="Doren" />
      </div>
    </div>
  );
}

export default App;
