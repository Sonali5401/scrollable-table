import { useState } from "react";
import useFetchProducts from "./hooks/useFetchProducts.js";
import "./styles.css";

export default function App() {
  const [showSrollToTop, setShowScrollToTop] = useState(false);
  const { data } = useFetchProducts();

  const handleScroll = () => {
    const tableContainer = document.getElementById("table-container");

    setShowScrollToTop(
      tableContainer.scrollTop > tableContainer.clientHeight / 2
    );
  };

  const scrollToTop = () => {
    const tableContainer = document.getElementById("table-container");
    tableContainer.scrollTop = 0;
  };

  return (
    <div>
      <h1>Product Table</h1>
      <div
        id="table-container"
        className="table-container"
        onScroll={handleScroll}
      >
        <table className="scrollable-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 &&
              data.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {showSrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          Scroll to Top
        </div>
      )}
    </div>
  );
}
