import { useState } from "react";
import type { Product } from "../../../../models/Product";

type SizeChartProps = {
  product: Product;
};

function SizeChart({ product }: SizeChartProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (product.sizes.length === 0) return null;

  return (
    <div className="product-detail__size-chart">
      <button
        className="product-detail__size-chart-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>Size Chart</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      <div className="product-detail__size-chart-content">
        <table className="product-detail__size-chart-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>2XL</th>
              <th>3XL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Chest</th>
              <td>44"</td>
              <td>46"</td>
              <td>48"</td>
              <td>50"</td>
              <td>52"</td>
              <td>54"</td>
              <td>56"</td>
            </tr>

            <tr>
              <th>Sleeve Length</th>
              <td>22.5"</td>
              <td>23.5"</td>
              <td>24.5"</td>
              <td>25.5"</td>
              <td>26.5"</td>
              <td>27.5"</td>
              <td>28.5"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SizeChart;
