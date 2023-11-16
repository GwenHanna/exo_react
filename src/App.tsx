import "./App.css";
import { SearchBar } from "./components/form/searchBar";
import { Product } from "./components/product/product";
import { PRODUCTS } from "./utils/dataProduct";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Product product={PRODUCTS} />
    </div>
  );
}

export default App;
