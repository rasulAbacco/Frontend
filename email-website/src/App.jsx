import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import HomePage from './pages/HomePage';
// import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Integrations from './pages/Integrations';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FloatingSocials from './components/FloatingSocials';
function App() {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <FloatingSocials />
        </div>
    );
}

export default App;
