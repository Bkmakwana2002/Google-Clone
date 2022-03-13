import './App.css';
import Navbar from './Components/Navbar'
import Routes from './Components/Routes';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const [DarkTheme, setDarkTheme] = useState(false);

  return (
    <div className={DarkTheme ? 'dark': ''}>
       <div className="bg-gray-100 dark:bg-slate-900 dark:text-white min-h-screen">
           <Navbar DarkTheme={DarkTheme} setDarkTheme={setDarkTheme}/>
           <Routes/>
           <Footer/>
       </div>
    </div>
  );
}

export default App;
