// App.js pascal casing
import Name from './Name'
import Counter from './Counter'
import ProductList from './product/ProductList';

function App(){
   return  <div>
    <ProductList/>
    <Name value="Mine"/>
    <Name value="Your"/>
    <Counter/>
     <h1>Hello World</h1>
    </div>
}

export default App;