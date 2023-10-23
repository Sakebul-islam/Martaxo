import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the user's cart items from the API using user.email
    fetch(
      `https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/cart/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        const totalPrice = data.reduce((acc, item) => {
          return acc + item.itemPrice * item.quantity;
        }, 0);
        setTotalPrice(totalPrice);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  }, [user.email]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    fetch(
      `https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/cart/${itemId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((item) => {
          if (item._id === itemId) {
            item.quantity = newQuantity;
          }
          return item;
        });
        setCartItems(updatedCart);
        const newTotalPrice = updatedCart.reduce((acc, item) => {
          return acc + item.itemPrice * item.quantity;
        }, 0);
        setTotalPrice(newTotalPrice);
      })
      .catch((error) => console.error('Error:', error));
    console.clear();
  };

  const handleRemoveItem = (itemId) => {
    fetch(
      `https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/cart/delete/${itemId}`,
      {
        method: 'DELETE',
      }
    )
      .then((res) => res.json())
      .then(() => {
        const updatedCart = cartItems.filter((item) => item._id !== itemId);
        setCartItems(updatedCart);
        const newTotalPrice = updatedCart.reduce((acc, item) => {
          return acc + item.itemPrice * item.quantity;
        }, 0);
        setTotalPrice(newTotalPrice);
      })
      .catch((error) => console.error('Error:', error));
    console.clear();
  };

  console.log(cartItems.map((item) => item));
  return (
    <div className='dark:bg-black text-black px-2 py-10'>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-center mb-8 text-black dark:text-white'>
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <div className='w-full h-screen flex justify-center items-center text-black dark:text-white'>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className='flex flex-col md:flex-col-reverse lg:flex-row gap-10'>
            <div className='flex flex-col gap-4 flex-1'>
              <h2 className='text-xl font-bold text-center p-2 uppercase bg-slate-400'>
                Product
              </h2>
              {isLoading
                ? 'Loading...'
                : cartItems.map((item) => (
                    <div
                      key={item._id}
                      className='bg-gray-400 text-black p-6 flex flex-col sm:flex-row gap-4'
                    >
                      <figure className='w-full sm:w-40'>
                        <img
                          src={item.itemImage}
                          alt={item.itemName}
                          title={item.itemName}
                        />
                      </figure>
                      <div className='space-y-1 text-md capitalize'>
                        <p className='font-bold'>{item.itemName}</p>
                        <p>
                          <span className='font-bold'>Price&nbsp;:&nbsp;</span>$
                          {item.itemPrice}
                        </p>
                        <p>
                          <span className='font-bold'>
                            Catagory&nbsp;:&nbsp;
                          </span>
                          ${item.itemCatagory}
                        </p>
                        <div className='flex gap-4 items-center'>
                          <button
                            className='btn rounded-sm text-xl bg-blue-950 border-none hover:bg-blue-900 text-white h-auto w-auto p-3'
                            onClick={() => {
                              item.quantity > 1
                                ? handleUpdateQuantity(
                                    item._id,
                                    item.quantity - 1
                                  )
                                : handleRemoveItem(item._id);
                            }}
                          >
                            <FaMinus />
                          </button>
                          <span className='inline-block py-2 px-7 sm:px-10 bg-transparent border-2 rounded-sm font-bold'>
                            {item.quantity}
                          </span>
                          <button
                            className='btn rounded-sm text-xl bg-blue-950 border-none hover:bg-blue-900 text-white h-auto w-auto p-3'
                            onClick={() =>
                              handleUpdateQuantity(item._id, item.quantity + 1)
                            }
                          >
                            <FaPlus />
                          </button>
                          <button
                            className='btn rounded-sm text-xl bg-blue-950 border-none hover:bg-blue-900 text-white h-auto w-auto p-3'
                            onClick={() => handleRemoveItem(item._id)}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
            <div className='flex flex-col gap-4 flex-1'>
              <h2 className='text-xl font-bold text-center p-2 uppercase bg-slate-400'>
                Order Summary
              </h2>
              <div className='bg-gray-400 min-h-[210px] p-4'>
                {cartItems.map((item) => (
                  <ul
                    key={item._id}
                    className='bg-gray-400 text-black flex gap-4'
                  >
                    <li className='w-[60%] sm:w-[70%] capitalize flex justify-between after:content-[":"] truncate'>
                      <span className='truncate'>{item.itemName}</span>
                    </li>
                    <li>
                      {item.itemPrice}&nbsp;x&nbsp;{item.quantity}
                    </li>
                  </ul>
                ))}
                <div className='divider after:bg-neutral-800 before:bg-neutral-800'></div>
                <ul className='flex justify-start items-center text-2xl'>
                  <li className='w-[60%] sm:w-[70%] capitalize flex justify-between after:content-[":"] truncate'>
                    <p>Total Price&nbsp;</p>
                  </li>
                  <li>&nbsp;$&nbsp;{totalPrice.toFixed(2)}</li>
                </ul>
              </div>
              <button className='btn w-full text-white rounded-sm'>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
