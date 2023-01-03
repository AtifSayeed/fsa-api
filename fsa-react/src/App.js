// App.js pascal casing
import ProductList from './product/ProductList';
import Home from './Home';
import Contact from './Contact'
import Header from './Header';
import User from './users/User';
import Footer from './Footer';
import { BrowserRouter , Routes, Route} from 'react-router-dom' ;
import Login from './Login';

function App(){
   return  <div>
<BrowserRouter>
 <Header/>
 <Login/>
<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/product" element={<ProductList/>}/>
   <Route path="/user" element={<User/>}/>
   <Route path="/login" element={<Login/>}/>
   
</Routes>
 <Footer/>
</BrowserRouter>
    </div>
}
export default App;