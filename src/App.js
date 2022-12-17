import './App.css';
import Counter from "./components/Counter";
import Matchers from './components/Matchers';
import MockComponent from './components/MockComponents/MockComponent';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      Learn React
      <Counter />
      <Matchers />
      <Todos />
      <MockComponent />
    </div>
  );
}

export default App;
