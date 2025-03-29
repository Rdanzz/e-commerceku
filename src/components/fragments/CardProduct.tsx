import { ReactNode } from "react";
import useCartStore, { Product } from "../../store/CartStore";

const CardProduct = ({ children }: { children: ReactNode }) => {
  return <div className="group relative">{children}</div>;
};

const Header = ({ image }: { image: string }) => {
  return (
    <img
      src={image}
      alt="Product image"
      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
    />
  );
};

const Body = ({
  name,
  color,
  price,
  product,
}: {
  name: string;
  color: string;
  price: number;
  product: Product;
}) => {
  const addToCart = useCartStore((state) => state.addToCart); // Mengambil fungsi addToCart dari Zustand store

  return (
    <>
      <div className="mt-4 flex justify-between pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          Rp {price.toLocaleString()}
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        type="button"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add to Cart
      </button>
      {/* Menggunakan addToCart untuk menambah produk */}
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
