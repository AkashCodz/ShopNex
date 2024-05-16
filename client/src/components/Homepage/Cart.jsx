import React from 'react';
import { useCart } from '../../CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
    <div className="my-5 flex justify-between text-4xl">
      <div className="font-black ml-32 text-5xl">Shooping Cart</div>
      <div className="font-semibold mr-12 bg-green-500 px-2 rounded-md">Total Price: 
      <span className="font-black"> {getTotalPrice()}$</span>
      </div>
    </div>
<div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2  justify-items-center justify-center">
        {cartItems.map((item, index) => (
    <div className=" hover:scale-125 duration-300 cursor-pointer m-6 w-48 h-72 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
    <div key={index} className="relative pt-2 flex items-center justify-center">
        <img key={`${item.id}-image`} src={item.image} alt={item.name} className="hover:scale-60 hover:h-full hover:w-full duration-300 cursor-pointer h-40 w-40 object-cover rounded-md" />
      </div><div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75">{item.name}</span>
          <div className="flex justify-between mt-4">
            <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">${item.price}</span>
            <button className="" onClick={() => handleRemoveFromCart(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25px" height="25px"><radialGradient id="SrYuS0MYDGH9m0SRC6_noa" cx="31.417" cy="-1098.083" r="28.77" gradientTransform="translate(0 1128)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f4e09d" /><stop offset=".226" stopColor="#f8e8b5" /><stop offset=".513" stopColor="#fcf0cd" /><stop offset=".778" stopColor="#fef4dc" /><stop offset="1" stopColor="#fff6e1" /></radialGradient><path fill="url(#SrYuS0MYDGH9m0SRC6_noa)" d="M7.5,64L7.5,64c1.933,0,3.5-1.567,3.5-3.5l0,0c0-1.933-1.567-3.5-3.5-3.5l0,0 C5.567,57,4,58.567,4,60.5l0,0C4,62.433,5.567,64,7.5,64z" /><radialGradient id="SrYuS0MYDGH9m0SRC6_nob" cx="31.5" cy="-1096" r="31.751" gradientTransform="translate(0 1128)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f4e09d" /><stop offset=".226" stopColor="#f8e8b5" /><stop offset=".513" stopColor="#fcf0cd" /><stop offset=".778" stopColor="#fef4dc" /><stop offset="1" stopColor="#fff6e1" /></radialGradient><path fill="url(#SrYuS0MYDGH9m0SRC6_nob)" d="M62,20.5L62,20.5c0-2.485-2.015-4.5-4.5-4.5H49c-2.209,0-4-1.791-4-4l0,0 c0-2.209,1.791-4,4-4h2c2.209,0,4-1.791,4-4l0,0c0-2.209-1.791-4-4-4H20c-2.209,0-4,1.791-4,4l0,0c0,2.209,1.791,4,4,4h2 c1.657,0,3,1.343,3,3l0,0c0,1.657-1.343,3-3,3H7.5C5.567,14,4,15.567,4,17.5l0,0C4,19.433,5.567,21,7.5,21H9c1.657,0,3,1.343,3,3 l0,0c0,1.657-1.343,3-3,3H5c-2.761,0-5,2.239-5,5l0,0c0,2.761,2.239,5,5,5h2.5c1.933,0,3.5,1.567,3.5,3.5l0,0 c0,1.933-1.567,3.5-3.5,3.5H6c-2.209,0-4,1.791-4,4l0,0c0,2.209,1.791,4,4,4h11.5c1.381,0,2.5,1.119,2.5,2.5l0,0 c0,1.381-1.119,2.5-2.5,2.5l0,0c-1.933,0-3.5,1.567-3.5,3.5l0,0c0,1.933,1.567,3.5,3.5,3.5h35c1.933,0,3.5-1.567,3.5-3.5l0,0 c0-1.933-1.567-3.5-3.5-3.5H52c-1.105,0-7-0.895-7-2l0,0c0-1.105,0.895-2,2-2h12c2.209,0,4-1.791,4-4l0,0c0-2.209-1.791-4-4-4h-2.5 c-1.381,0-2.5-1.119-2.5-2.5l0,0c0-1.381,1.119-2.5,2.5-2.5H57c2.209,0,4-1.791,4-4l0,0c0-2.209-1.791-4-4-4h-4.5 c-1.933,0-3.5-1.567-3.5-3.5l0,0c0-1.933,1.567-3.5,3.5-3.5h5C59.985,25,62,22.985,62,20.5z" /><g><linearGradient id="SrYuS0MYDGH9m0SRC6_noc" x1="32" x2="32" y1="53" y2="8" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#def9ff" /><stop offset=".282" stopColor="#cff6ff" /><stop offset=".823" stopColor="#a7efff" /><stop offset="1" stopColor="#99ecff" /></linearGradient><path fill="url(#SrYuS0MYDGH9m0SRC6_noc)" d="M15.211,11h33.578c3.024,0,5.356,2.663,4.956,5.661l-4.667,35 C48.747,54.145,46.628,56,44.122,56H19.878c-2.506,0-4.625-1.855-4.956-4.339l-4.667-35C9.855,13.663,12.187,11,15.211,11z" /><linearGradient id="SrYuS0MYDGH9m0SRC6_nod" x1="32" x2="32" y1="46" y2="56" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#41bfec" /><stop offset=".232" stopColor="#4cc5ef" /><stop offset=".644" stopColor="#6bd4f6" /><stop offset="1" stopColor="#8ae4fd" /></linearGradient><path fill="url(#SrYuS0MYDGH9m0SRC6_nod)" d="M53,18H11c-1.105,0-2-0.895-2-2v-6c0-1.105,0.895-2,2-2h42c1.105,0,2,0.895,2,2v6 C55,17.105,54.105,18,53,18z" /></g><g><linearGradient id="SrYuS0MYDGH9m0SRC6_noe" x1="52" x2="52" y1="-1064" y2="-1088" gradientTransform="translate(0 1128)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ff5840" /><stop offset=".007" stopColor="#ff5840" /><stop offset=".989" stopColor="#fa528c" /><stop offset="1" stopColor="#fa528c" /></linearGradient>
                <path fill="url(#SrYuS0MYDGH9m0SRC6_noe)" d="M52,40c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S58.627,40,52,40z" />
                <path fill="#fff" d="M57.417,49.412l-8.005,8.005c-0.778,0.778-2.051,0.778-2.828,0l0,0 c-0.778-0.778-0.778-2.051,0-2.828l8.005-8.005c0.778-0.778,2.051-0.778,2.828,0l0,0C58.194,47.361,58.194,48.634,57.417,49.412z" />
                <path fill="#fff" d="M46.583,49.412l8.005,8.005c0.778,0.778,2.051,0.778,2.828,0l0,0c0.778-0.778,0.778-2.051,0-2.828 l-8.005-8.005c-0.778-0.778-2.051-0.778-2.828,0l0,0C45.806,47.361,45.806,48.634,46.583,49.412z" /></g></svg>
            </button>
          </div>
        </div>
</div>
          ))}
    </div>
    </div>
  );
};

export default ShoppingCart;
