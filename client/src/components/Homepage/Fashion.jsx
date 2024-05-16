import React from 'react';
import { useGetFashionQuery } from '../../api/loginApi';
import { useCart } from '../../CartContext';

const Cloth = (props) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: props.id, name: props.name, price: props.price, image: props.url });
  };

  return (
    <>
      <div className="bg-white w-44 h-68 shadow-lg rounded-lg overflow-hidden">
        <img src={props.url} alt="Product 1" className="w-44 h-44" />
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-bold">{props.name}</h3>
          <p className="text-gray-700">{props.price}$</p>
          <button onClick={handleAddToCart} className="my-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

function All() {
  const { data, error, isLoading, isSuccess } = useGetFashionQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess && data) {
    return (
      <>
        <div className="container mx-auto py-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
            {data.map((product, index) => (
              <Cloth key={index} id={product.id} name={product.name} price={product.price} url={product.url} />
            ))}
          </div>
        </div>
      </>
    );
  }

  return null;
}

export default All;
