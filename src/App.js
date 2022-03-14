import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Live from "./pages/Live";
import Following from "./pages/Following";
import Browse from "./pages/Browse";
import Game from "./pages/Game";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="overflow-y-auto flex-grow bg-gray-100">
        <Routes>
          <Route path="/:username" element={<Live />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/following" element={<Following />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/game/:game" element={<Game />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
