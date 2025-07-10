import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ToggleDarkMode = () => {
    const [isDark, setIsDark] = useState(() => localStorage.theme === 'dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button onClick={() => setIsDark(!isDark)} className="toggle-dark">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

    );
};

export default ToggleDarkMode;
