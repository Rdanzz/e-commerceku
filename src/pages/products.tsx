import CardProduct from "../components/fragments/CardProduct";
import Navigation from "../components/fragments/Navigation";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    color: "black",
    price: 325000,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "Tee Basic",
    color: "aspen white",
    price: 223000,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
  },
  {
    id: 3,
    name: "Prala Fasz",
    color: "charcoal",
    price: 155000,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
  },
  {
    id: 4,
    name: "X-code Bash",
    color: "iso dots",
    price: 195000,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
  },
];
const ProductsPage = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body
                  name={product.name}
                  color={product.color}
                  price={product.price}
                  product={product}
                />
              </CardProduct>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
