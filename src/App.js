import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

import Main from './components/main/Main';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { ContentContext } from './contexts/mainContentContext';

function App() {
  const {isDarkMode} = useContext(ThemeContext);
  const {openMenu  } = useContext(ContentContext);
  return (
    <div className={`${isDarkMode?"dark-theme":""} App`}>
       
       <div className={`${openMenu === true ? "open  sidebar":"close"} sidebar`}>
       <Sidebar />
       </div>
    <div className='main'>
    <Main/>
    </div>
   
    </div>
  );
}

export default App;
