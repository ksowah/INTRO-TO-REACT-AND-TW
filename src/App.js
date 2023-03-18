import Counter from "./components/Counter";


function App() {
  return (
    <div className="App">
      <Counter countValue={10} />
      <Counter countValue={20} />
      <Counter countValue={30} />
      <Counter countValue={40} />
    </div>
  );
}

export default App;
