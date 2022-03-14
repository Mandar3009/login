import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Search  from './components/Search';
import { BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom';
import Card from './components/Card';

// import {BrowserRouter , Route} from "react-router-dom"

function App() {
  return (
  //   <BrowserRouter>
  // <Routes>
  //         {/* <Route exact path="/login" ><Login></Login> </Route> */}

  //    <Route exact path="/login" component={Login} />
  // </Routes>
  // </BrowserRouter>  
  <div>
  <Router>
    <Routes>
    <Route exact path="/"  element={<Login/>} ></Route>

    <Route exact path="/login"  element={<Login/>}></Route>
    <Route exact path="/search"  element={<Search/>}></Route>
    <Route exact path="/card/:id"  element={<Card/>}></Route>


    </Routes>
  </Router>
  </div>
  );
}

export default App;
