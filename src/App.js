import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Paygate from './Payment';
import GooglePayComponent from './gpay';
function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<Routes>
  <Route path='/' element={<Paygate/>}></Route>
  <Route path='gpaycomponent' element={<GooglePayComponent/>}></Route>
</Routes>
</BrowserRouter>      
  
    </div>
  );
}

export default App;
