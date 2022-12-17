import './App.css';
import Counter from "./components/Counter";
import Matchers from './components/Matchers';
import MockComponent from './components/MockComponents/MockComponent';
import SnapshotExample from './components/SnapshotExample';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      Learn React
      <Counter />
      <Matchers />
      <Todos />
      <MockComponent />
      <SnapshotExample />
    </div>
  );
}

export default App;
