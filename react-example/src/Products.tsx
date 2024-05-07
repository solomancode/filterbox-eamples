import { products } from "./data";

export type Product = (typeof products)[0];

interface Props {
  products: Product[];
}
export const Products = (props: Props) => {
  return (
    <ul>
      {props.products.map((p) => (
        <li key={p.emoji} className="product">
          <h2>{p.emoji}</h2>
          <small>{p.category}</small>
          <hr />
          <span className="price">💵 {p.price}</span>
        </li>
      ))}
    </ul>
  );
};
