import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/sprint_1/index'; 
import Login from './pages/sprint_1/login'; 
import Password from './pages/sprint_1/password'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/login' exact element={<Login/>} /> 
        <Route path='/password' exact element={<Password/>} /> 
       
      </Routes>
    </Router>
  );
}

export default App;
