import './App.css';
import Counter from "./components/Counter";
import Matchers from './components/Matchers';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      Learn React
      <Counter />
      <Matchers />
      <Todos />
    </div>
  );
}

export default App;
