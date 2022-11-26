import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
