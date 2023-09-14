import openModal from "./components/OpenModal";

function handleOpen(){
  openModal()
}

function App() {
  return (
    <>
      <button onClick={handleOpen}>Abrir modal</button>
    </>
  );
}

export default App;
