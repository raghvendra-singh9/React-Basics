import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!!</Link>
      </header>

      {/* <Pet animal="Dog" name="Luna" breed="Havanese" />
      <Pet animal="Bird" name="Pepper" breed="Cokatiel" />
      <Pet animal="Cat" name="Doink" breed="Mixed" /> */}
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
