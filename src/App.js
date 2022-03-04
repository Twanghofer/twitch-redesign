import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="overflow-y-auto flex-grow">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
