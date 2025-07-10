import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './ToggleDarkMode';
import { FaMailBulk } from "react-icons/fa";
const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"> <span><FaMailBulk /></span> EmailAI Pro</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                {/* <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li> */}
                <li><Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>Features</Link></li>
                <li><Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                <li><Link to="/integrations" className={location.pathname === '/integrations' ? 'active' : ''}>Integrations</Link></li>
                <li><Link to="/login" className='login-btn'>Login</Link></li>
            </ul>
            <div className="nav-btns">
                
                <li><Link to="/signup" className="get-started"><span>Get Started</span></Link></li>
                <li><DarkModeToggle /></li>
            </div>
        </nav>
    );
};

export default Navigation;








































// import { Link, useLocation } from 'react-router-dom';
// import ToggleDarkMode from './ToggleDarkMode';

// const Navbar = () => {
//     const { pathname } = useLocation();

//     const navLinks = [
//         { to: '/dashboard', label: 'Dashboard' },
//         { to: '/features', label: 'Features' },
//         { to: '/pricing', label: 'Pricing' },
//         { to: '/about', label: 'About' },
//         { to: '/integrations', label: 'Integrations' },
//     ];

//     return (
//         <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">
//             <Link to="/" className="text-xl font-bold text-indigo-600">EmailAI Pro</Link>
//             <div className="flex items-center gap-6">
//                 {navLinks.map(link => (
//                     <Link
//                         key={link.to}
//                         to={link.to}
//                         className={`hover:text-indigo-500 ${pathname === link.to ? 'text-indigo-600 font-semibold' : ''}`}
//                     >
//                         {link.label}
//                     </Link>
//                 ))}
//                 <Link to="/login" className="hover:text-indigo-500">Login</Link>
//                 <Link to="/get-started">
//                     <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
//                         Get Started
//                     </button>
//                 </Link>
//                 <ToggleDarkMode />
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

