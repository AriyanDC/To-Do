import logo from './logo.svg';
import './App.css';
import Item from "./components/Item";
import Items from "./components/Items"
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <br />
        <Items />
        <Item
                    name={"TOODOO"}
                    completed={false}
        />
      </header>
    </div>
  );
}

export default App;
