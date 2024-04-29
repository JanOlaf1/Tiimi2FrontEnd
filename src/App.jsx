import './App.css'
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/manufacturers"}>Manufacturers</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App
