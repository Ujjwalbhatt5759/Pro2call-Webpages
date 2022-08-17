import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/index'; 
import Login from './pages/login'; 
import Password from './pages/password'; 
import Addnew from './pages/serviceprovider-addnew'; 
import Editservice from "./pages/serviceprovider-editservice";
import Listed from "./pages/serviceprovider-listed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/login' exact element={<Login/>} /> 
        <Route path='/password' exact element={<Password/>} /> 
        <Route path='/Addnew' exact element={<Addnew/>} /> 
        <Route path='/Editservice' exact element={<Editservice/>} />
        <Route path='/Listed' exact element={<Listed/>} />
      </Routes>
    </Router>
  );
}

export default App;
