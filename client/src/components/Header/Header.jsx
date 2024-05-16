import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../userSlice';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../userSlice';
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const user = useSelector(selectUser);

  // Function to convert username to sentence case
  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  // Display the username in sentence case
  const formattedUsername = toSentenceCase(user);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdownNav = () => {
    setIsOpenNav(!isOpenNav);
  };


  // Logout
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(clearUser()); // Dispatch clearUser action
    // Redirect to login page or any other appropriate action after logout
    navigate('/SignIn')
  };

  return (
    <>
      <header className="bg-blue-500 pt-4 text-white">
        <div className="flex justify-center text-center mb-2 sm:pl-10 sm:pr-10">
          <div className="">
            <h1 className="text-xl w-full mr-96 sm:text-2xl font-bold">Welcome to ShopNex</h1>
            <p className="text-base w-full text-center mb-4 sm:pl-10 sm:pr-10 sm:text-lg">Your one-stop destination for all your shopping needs.</p>
          </div>
          <div className="flex absolute right-0 text-base sm:text-2xl space-x-4 sm:mr-10">
            <div className="space-x-8">
              <a href="#" className="text-gray-800 font-semibold text-3xl hover:text-white">{formattedUsername}</a>
              <button className="text-3xl font-bold" onClick={toggleDropdown}>&#9776;</button>
              <nav className={`absolute right-0 mt-2 w-56 text-center font-bold rounded-md text-lg bg-blue-800 text-white ${isOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <button onClick={handleLogout} className="w-full text-lg rounded-md hover:bg-gray-800" >Logout</button>
                <a href="#" className="block text-lg hover:bg-gray-800">Track item</a>
                <a href="#" className="block text-lg rounded-md hover:bg-gray-800">Delete Account</a>
              </nav>
            </div>
          </div>
        </div>
        {/* Search Button */}
        <div className="max-w-full mx-96 relative sm:justify-center">
          <input type="text" className="w-full text-black py-2 pl-10 bg-gray-200 rounded-lg focus:outline-none" placeholder="Search Items on ShopNex.com"/>
          <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="relative flex flex-col sm:flex-row bg-orange-400 mt-6 py-5 rounded hover:bg-orange-400 font-bold">
          <a href="#" className="ml-8 inline-flex items-center px-4 bg-white rounded-full hover:bg-gray-100 text-blue-500 font-bold">
            Explore Products
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="absolute text-lg right-1/4 space-x-8 font-bold mt-2 sm:mt-0">
            <Link to="/All" href="#" className="text-gray-800 hover:text-white">All</Link>
            <Link to='/Mobiles' className="text-gray-800 hover:text-white">Mobiles</Link>
            <button className="text-gray-800 hover:text-white" onClick={toggleDropdownNav}>Electronics
              <nav className={`absolute left-20 mt-2 w-56 text-center font-bold rounded-md text-lg bg-blue-950 text-white ${isOpenNav ? 'block' : 'hidden'}`} onMouseEnter={() => setIsOpenNav(true)} onMouseLeave={() => setIsOpenNav(false)}>
                <Link to='/Watches' className="block text-lg hover:bg-gray-800">Watches</Link>
                <Link to='/EarBuds' className="block text-lg hover:bg-gray-800">EarBuds</Link>
                <Link to='/PowerBank' className="block text-lg hover:bg-gray-800">Power Bank</Link>
              </nav>
            </button>
            <Link to="/HomeKitchen" href="#" className="text-gray-800 hover:text-white">Home & Kitchen</Link>
            <Link to='/Fashion' className="text-gray-800 hover:text-white">Fashion</Link>
            <Link to='/Computers' className="text-gray-800 hover:text-white">Computers</Link>
            <Link to='/Computers' className="text-gray-800 hover:text-white">Books</Link>
          </div>
          <Link to="/Cart" className="absolute right-8 text-2xl inline-flex sm:px-4 bg-blue-950 rounded-md text-blue-500 font-bold">
            Cart
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header;
