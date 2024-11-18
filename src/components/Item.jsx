import Products from "../data/Products";

const Item = Products.map(Product =>
    <li key={Product.id}>
      {Product.title}
    </li>
  );
  
  return (
    <ul>{Item}</ul>
  );
