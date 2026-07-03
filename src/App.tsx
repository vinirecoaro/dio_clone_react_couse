import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Register from "./pages/register";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/feed" element={<Feed></Feed>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
