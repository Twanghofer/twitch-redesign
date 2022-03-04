import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="overflow-y-auto flex-grow">
        <Home />
      </main>
    </div>
  );
}

export default App;
