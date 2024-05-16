import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp.jsx' 
import SignIn from './components/SignIn/SignIn.jsx'
import Error from './components/Error/Error.jsx'
import All from './components/Homepage/All.jsx' 
import Mobiles from './components/Homepage/Mobiles.jsx' 
import Watches from './components/Homepage/Watches.jsx' 
import EarBuds from './components/Homepage/EarBuds.jsx' 
import PowerBank from './components/Homepage/PowerBank.jsx' 
import HomeKitchen from './components/Homepage/HomeKitchen.jsx' 
import Fashion from './components/Homepage/Fashion.jsx' 
import Computers from './components/Homepage/Computers.jsx' 
import Cart from './components/Homepage/Cart.jsx' 
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { CartProvider } from './CartContext.jsx'


const path = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route element={<App />}>
        <Route index path="/all" element={<All />} /> 
        <Route path="/cart" element={<Cart />} />  
        <Route path='Mobiles' element={<Mobiles/>}/>
        <Route path='Watches' element={<Watches/>}/>
        <Route path='EarBuds' element={<EarBuds/>}/>
        <Route path='PowerBank' element={<PowerBank/>}/>
        <Route path='HomeKitchen' element={<HomeKitchen/>}/>
        <Route path='Fashion' element={<Fashion/>}/>
        <Route path='Computers' element={<Computers/>}/>
      </Route>
      <Route path="" element={<SignUp />} />
      <Route path="*" element={<Error />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
  <CartProvider>  
  <RouterProvider router={path}>
    <SignIn />
    </RouterProvider>
  </CartProvider>
  </Provider>
  </>
)
