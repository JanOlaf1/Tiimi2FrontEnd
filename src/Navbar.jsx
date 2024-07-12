import { Link } from "react-router-dom";
import './App.css';

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <ul className="	cursor: pointer container mx-auto flex justify-center items-center gap-x-4 text-xl text-emerald-600 border-b-2 border-slate-400 p-4 font-mono">
                    <li className="hover:text-emerald-800 hover:underline"><Link to="/">Home</Link></li>
                    <li className="hover:text-emerald-800 hover:underline"><Link to="/about">About</Link></li>
                    <li className="hover:text-emerald-800 hover:underline"><Link to="/products">Product</Link></li>
                    <li className="hover:text-emerald-800 hover:underline"><Link to="/manufacturers">Manufacturers</Link></li>
                </ul>
            </center>
        </div>
    );
}
