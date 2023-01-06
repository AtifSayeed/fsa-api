// App.js pascal casing
import ProductList from './product/ProductList';
import Home from './Home';
import Contact from './Contact'
import Header from './Header';
import User from './users/User';
import Footer from './Footer';
import { BrowserRouter , Routes, Route} from 'react-router-dom' ;
import Login from './Login';
import AppContext from './context/AppContext';
import { useState, useEffect } from 'react'

function App(){
   const [authenticated,setAuthenticated] = useState(false)
   const userState = {
      authenticated:authenticated,
      setAuthenticated:setAuthenticated
   }
   useEffect(() => {
      if (localStorage.getItem('user')) {
          setAuthenticated(true);
      }
  }, []);
   return  <AppContext.Provider value={ userState }>
<BrowserRouter>
 <Header/>
<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/product" element={<ProductList/>}/>
   <Route path="/user" element={<User/>}/>
   <Route path="/login" element={<Login/>}/>
   
</Routes>
 <Footer/>
</BrowserRouter>
    </AppContext.Provider>
}
export default App;