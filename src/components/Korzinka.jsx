import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaTrash } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
function Korzinka() {
  const { total, products, deleteProduct } = useGlobalContext();

  //

  return (
    <div className="site-container">
      <h1 className="">Booking page</h1>
      <Link to="/">
        <button className="btn btn-secondary mt-20">Back to Home</button>
      </Link>
      <div className="card  card-side   bg-base-100 flex items-center shadow-xl p-20 m-20">
        <ul>
          {products.length > 0 &&
            products.map((product) => {
              return <CardItem key={product.id} product={product} />;
            })}
        </ul>
      </div>
    </div>
  );
}

export default Korzinka;
