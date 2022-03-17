import "./App.css";
import Counter from "./components/Counter";
import CounterFunc from "./components/CounterFunc";

export default function App() {
  return (
    <div>
      Functional Component
      <Counter />
      <CounterFunc />
    </div>
  );
}
